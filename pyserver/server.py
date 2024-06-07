from flask import (Flask, request, jsonify)
from flask_cors import CORS
from ariadne.explorer import ExplorerApollo
from queries import getUser_resolver, authenticateUser_resolver, createUser_resolver, \
    start_authentication_resolver, add_bookmark, delete_bookmark, add_user_profile_image, \
        terminateUser_authentication
from ariadne import load_schema_from_path, make_executable_schema, \
    graphql_sync, snake_case_fallback_resolvers, ObjectType

app = Flask(__name__)
app.debug = True

# we need to hide the database uri
# we also need to implement a requirements-dev.txt

CORS(app)

query = ObjectType("Query")
mutation = ObjectType("Mutation")

query.set_field("getUser", getUser_resolver)
query.set_field("authenticateUser", authenticateUser_resolver)
query.set_field("startAuthentication", start_authentication_resolver)

mutation.set_field("createUser", createUser_resolver)
mutation.set_field("add_bookmark", add_bookmark)
mutation.set_field("delete_bookmark", delete_bookmark)
mutation.set_field("add_user_profile_image", add_user_profile_image)
mutation.set_field("terminateUser_authentication", terminateUser_authentication)

type_defs = load_schema_from_path("./pyserver/schema.graphql")
schema = make_executable_schema(
    type_defs, query, mutation, snake_case_fallback_resolvers
)

explorer_html = ExplorerApollo().html(None)

@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return explorer_html, 200

@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()

    success, result = graphql_sync(
        schema,
        data,
        context_value=request,
        debug=app.debug
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code


