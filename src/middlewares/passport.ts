import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import config from '../configs/configuration';
import User from '../models/User';

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt_default,
};

export default new Strategy(opts, async (payload, auth) => {
  try {
    const user = await User.findById(payload.id);
    if (user) {
      return auth(null, user);
    }
    return auth(null, false);
  } catch (error) {
    throw error;
  }
});
