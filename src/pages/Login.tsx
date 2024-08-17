import { JoinStyle } from './Join';
import AuthBackground from '@/components/auth/AuthBackground';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';

export interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const { userLogin, loginError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    userLogin(data);
  };

  const handleClick = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <AuthBackground>
      <LoginStyle>
        <img src='/assets/images/logo-withLettudy.png' alt='logo' height={55} />
        <div className='container'>
          <h2>로그인</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='email'>이메일</label>
                <input
                  id='email'
                  type='text'
                  {...register('email', {
                    required: '이메일 및 비밀번호를 다시 입력해주세요.',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: '이메일 및 비밀번호를 다시 입력해주세요.',
                    },
                  })}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>비밀번호</label>
                <input
                  id='password'
                  type='password'
                  {...register('password', {
                    required: '이메일 및 비밀번호를 다시 입력해주세요.',
                  })}
                />
                <div className='error-container'>
                  {(errors.email || errors.password || loginError) && (
                    <p className='error-text'>
                      이메일 및 비밀번호를 다시 입력해주세요.
                    </p>
                  )}
                </div>
              </div>

              <div className='login-button'>
                <Button size='medium' onClick={handleClick}>
                  로그인
                </Button>
              </div>
              <div className='join-link'>
                <Link to='/join'>회원가입</Link>
              </div>
            </fieldset>
          </form>
        </div>
      </LoginStyle>
    </AuthBackground>
  );
}

export default Login;

export const LoginStyle = styled(JoinStyle)`
  .container {
    margin-top: 50px;

    .error-container {
      min-height: 20px;
    }

    .error-text {
      text-align: center;
      margin-top: 12px;
    }

    .login-button {
      margin-top: 10px;
    }

    .join-link {
      margin-top: 30px;
      color: ${({ theme }) => theme.color_textBlack};
      font-size: ${({ theme }) => theme.fontSize_xs};
    }

    .join-link a,
    .join-link a:visited {
      color: ${({ theme }) => theme.color_textKey};
    }
  }
`;
