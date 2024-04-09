import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, FormProvider, useFormContext, FieldValues } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoveCareTodayLogo from '../assets/lovecaretodayLogoSVG.svg';
import { authenticateUser, startAuthentication } from '../query';
import { useLazyQuery } from '@apollo/client';
import { clientPY } from '../client';
import BackButton from '../components/button/BackButton';
import SignUpButton from '../components/button/SignUpButton';
import { useNavigate } from 'react-router-dom';
import { useAuthenticatedUser } from '../providers/AuthenticatedUserProvider';

interface InputCompProps {
  label: string;
  type: string;
}
interface RenderAdornmentProps {
  type: string;
  showPassword: boolean;
  handleFunction: () => void;
}
const RenderAdornment: React.FC<RenderAdornmentProps> = ({
  type,
  showPassword,
  handleFunction,
}) => {
  if (type !== 'password') return null;
  return (
    <InputAdornment position='end'>
      <IconButton
        aria-label='toggle password visibility'
        onClick={handleFunction}
        onMouseDown={handleFunction}
        edge='end'
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};

const InputComp: React.FC<InputCompProps> = ({ label, type }) => {
  const { register } = useFormContext();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <TextField
      // error={false}
      required
      focused
      fullWidth
      InputProps={{
        endAdornment: (
          <RenderAdornment
            type={type}
            showPassword={showPassword}
            handleFunction={handleClickShowPassword}
          />
        ),
      }}
      id='outlined-error'
      label={label}
      defaultValue=''
      {...register(label)}
      type={type === 'password' ? (showPassword ? 'text' : type) : type}
    />
  );
};

type AuthenticationButtonProps = { loading: boolean; label: string };

const AuthenticationButton: React.FC<AuthenticationButtonProps> = ({ loading, label }) => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} pt={2}>
      <SignUpButton />
      <Button type='submit'>
        {loading ? <CircularProgress size={'1rem'} /> : <Typography>{label}</Typography>}
      </Button>
    </Stack>
  );
};

type FormData = { Email: string; Password: string };

type EmailFormProp = { updateEmail: (formEmail: string) => void };

const EmailForm: React.FC<EmailFormProp> = ({ updateEmail }) => {
  const [sendPasscode, { loading, error, data }] = useLazyQuery(startAuthentication, {
    client: clientPY,
    fetchPolicy: 'no-cache',
  });

  const methods = useForm();
  const onSubmit = (formData: FieldValues) => {
    const { Email } = formData;
    event?.preventDefault();
    sendPasscode({ variables: { email: Email } });
    updateEmail(Email);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={2} alignItems={'center'}>
          <Typography fontSize={14}>Please enter your email to receive a login passcode</Typography>
          <InputComp label={'Email'} type={'email'} />
        </Stack>
        <AuthenticationButton loading={loading} label={'Send passcode'} />
      </form>
    </FormProvider>
  );
};

type PasscodeFormProp = { formEmail: string | null };

const PasscodeForm: React.FC<PasscodeFormProp> = ({ formEmail }) => {
  const navigate = useNavigate();
  const [authenticate, { loading, error, data }] = useLazyQuery(authenticateUser, {
    client: clientPY,
  });
  const { setAuthenticatedUser } = useAuthenticatedUser();
  console.log({ formEmail });
  const methods = useForm();
  const onSubmit = (formData: FieldValues) => {
    const { Password } = formData;
    event?.preventDefault();
    return authenticate({ variables: { email: formEmail, password: Password } });
  };
  if (data?.authenticateUser) {
    setAuthenticatedUser(data?.authenticateUser);
    navigate('/featured');
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={2} alignItems={'center'}>
          <Typography fontSize={14}>Please enter passcode sent to your email</Typography>
          <InputComp label={'Password'} type={'password'} />
        </Stack>
        <AuthenticationButton loading={loading} label={'Sign in'} />
      </form>
    </FormProvider>
  );
};

const AuthenticationForms: React.FC = () => {
  const [formEmail, setFormEmail] = useState<string | null>(null);

  return (
    <>
      {formEmail ? (
        <PasscodeForm formEmail={formEmail} />
      ) : (
        <EmailForm updateEmail={setFormEmail} />
      )}
    </>
  );
};

const SignIn: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ width: 420, px: 4, pt: 4, pb: 1 }}>
        <Stack spacing={1} sx={{ position: 'relative' }} alignItems={'center'}>
          <Box sx={{ position: 'absolute', left: -32, top: -32 }}>
            <BackButton />
          </Box>
          <Box width={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={LoveCareTodayLogo.toString()} alt='lovecaretoday-logo' width={'110rem'} />
              </Box>
              <Typography variant={'h5'}>Welcome to Love Care Today</Typography>
            </Stack>
          </Box>
          <Box width={1}>
            <AuthenticationForms />
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SignIn;
