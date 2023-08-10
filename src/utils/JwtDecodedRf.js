import jwtDecode from 'jwt-decode'

export default function JwtDecodedRf(refreshToken) {
    
  return jwtDecode(refreshToken);
}
