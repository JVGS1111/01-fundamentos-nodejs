import {exec} from 'node:child_process'

exec('arecord -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log('Dispositivos de áudio disponíveis:\n', stdout);
});