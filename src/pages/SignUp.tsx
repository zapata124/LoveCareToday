import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoveCareTodayLogo from '../assets/lovecaretodayLogoSVG.svg';
import { createUser } from '../query';
import { useMutation } from '@apollo/client';
import { clientPY } from '../client';
import BackButton from '../components/button/BackButton';
import SignInButton from '../components/button/SignInButton';
import { useNavigate } from 'react-router-dom';
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
    <Stack>
      <TextField
        // error={false}
        required
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
    </Stack>
  );
};
const SignUp: React.FC = () => {
  const [createNewUser, { loading, error, data }] = useMutation(createUser, { client: clientPY });
  const navigate = useNavigate();
  const methods = useForm();
  const onSubmit = (data: any) => {
    const { Firstname, Lastname, Email, Password, Confirmpassword } = data;
    event?.preventDefault();
    console.log(data);
    createNewUser({
      variables: {
        name: Firstname,
        lastname: Lastname,
        email: Email,
        password: Password,
        confirmpassword: Confirmpassword,
      },
    });
  };
  useEffect(() => {
    if (data) {
      navigate('/signin');
    }
  });
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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={3} sx={{ position: 'relative' }}>
              <Box sx={{ position: 'absolute', left: -32, top: -32 }}>
                <BackButton />
              </Box>
              <Box width={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={LoveCareTodayLogo.toString()}
                      alt='lovecaretoday-logo'
                      width={'110rem'}
                    />
                  </Box>
                  <Typography variant={'h5'}>Join Love Care Today</Typography>
                </Stack>
              </Box>
              <InputComp label={'Firstname'} type={'text'} />
              <InputComp label={'Lastname'} type={'text'} />
              <InputComp label={'Email'} type={'email'} />
              <InputComp label={'Password'} type={'password'} />
              <InputComp label={'Confirmpassword'} type={'password'} />
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} pt={2}>
              <Button onClick={() => navigate('/signin')}> Take me to Sign in</Button>
              <Button type='submit'>Sign up</Button>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}></Box>
          </form>
        </FormProvider>
      </Paper>
    </Box>
  );
};

export default SignUp;
