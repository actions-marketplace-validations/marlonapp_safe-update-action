const core = require('@actions/core')
const github = require('@actions/github')
const execSync = require('child_process').execSync

try {

  const targetDir = core.getInput('dir');
  console.log(`Directory to backup: ${targetDir}!`);

  const x = targetDir.lastIndexOf('/');
  const outputDir = targetDir.slice(0, x).concat('/backup', targetDir.slice(x, targetDir.length))
  console.log(`Output directory: ${outputDir}!`);
  
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  console.log(time)
  
  execSync(`mkdir -p ${outputDir}/${time}`, { encoding: 'utf-8' })
  const output = execSync(`cp ${targetDir} ${outputDir}/${time}`, { encoding: 'utf-8' })
  console.log(output)

} catch (error) {
  core.setFailed(error.message);
}