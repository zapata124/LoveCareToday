// / <reference types="react-scripts" />

declare module '@graphql-tools/merge' { 
    const mergeTypeDefs: (arg: any[]) => void; 
    export = mergeTypeDefs; 
}