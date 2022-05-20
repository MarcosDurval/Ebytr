import app from '.';
import connect from '../../database/connection';

const PORT = process.env.PORT || 3001;

connect();
app.listen(PORT, () => {
  console.log(`Ouvindo na Porta ${PORT}`);
});
