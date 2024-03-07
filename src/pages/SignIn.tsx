import React, { useState } from 'react';
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
import SignUpButton from '../components/button/SignUpButton';
interface InputCompProps {
  label: string;
  type: string;
}
interface RenderAdormentProps {
  type: string;
  showPassword: boolean;
  handleFunction: () => void;
}
const RenderAdorment: React.FC<RenderAdormentProps> = ({ type, showPassword, handleFunction }) => {
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
            <RenderAdorment
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
const SignIn: React.FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => {
    const { Email, Password } = data;
    event?.preventDefault();
    console.log(data);
  };
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
                  <Typography variant={'h5'}>Welcome to Love Care Today</Typography>
                </Stack>
              </Box>
              <InputComp label={'Email'} type={'email'} />
              <InputComp label={'Password'} type={'password'} />
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} pt={2}>
              <SignUpButton />
              <Button type='submit'>Sign in</Button>
            </Stack>
            {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}></Box> */}
          </form>
        </FormProvider>
      </Paper>
    </Box>
  );
};

export default SignIn;
