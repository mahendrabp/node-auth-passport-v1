import app from './app';
import './db';

app.listen(app.get('port'), () => {
  console.log('Server running in port:', app.get('port'));
});
