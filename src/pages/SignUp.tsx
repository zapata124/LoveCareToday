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
        error={false}
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
const SignUp: React.FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);
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
            <Stack spacing={3}>
              <Box width={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant={'h5'}>Join Love Care Today</Typography>
              </Box>
              <InputComp label={'First name'} type={'text'} />
              <InputComp label={'Last name'} type={'text'} />
              <InputComp label={'Email'} type={'email'} />
              <InputComp label={'Password'} type={'password'} />
              <InputComp label={'Confirm password'} type={'password'} />
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
              <Button type='submit'>Sign up</Button>
            </Box>
          </form>
        </FormProvider>
      </Paper>
    </Box>
  );
};

export default SignUp;

// <InputAdornment position='end'>
// <IconButton
//   aria-label='toggle password visibility'
//   onClick={handleClickShowPassword}
//   onMouseDown={handleClickShowPassword}
//   edge='end'
// >
//   {showPassword ? <VisibilityOff /> : <Visibility />}
// </IconButton>
// </InputAdornment>
