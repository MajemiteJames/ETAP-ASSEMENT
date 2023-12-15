import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ApiOperation, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication Endpoint')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'Create a new user',
    description: 'Create a new user profile',
  })
  @ApiBody({ description: 'Sign Up a User', type: AuthCredentialsDto })
  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @ApiOperation({
    summary: 'Sign In a user',
    description: 'Sign in a user o generate access toekn',
  })
  @ApiBody({ description: 'Sign Up a User', type: AuthCredentialsDto })
  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
