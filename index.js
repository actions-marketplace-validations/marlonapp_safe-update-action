const core = require('@actions/core');
const github = require('@actions/github');
const execSync = require('child_process').execSync;

try {

  const targetDir = core.getInput('dir');
  console.log(`Directory to backup: ${targetDir}!`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  console.log(time)
  
  const output = execSync(`mkdir ${targetDir}${time}`, { encoding: 'utf-8' })
  console.log(output)

  const output = execSync(`cp ${targetDir} ${targetDir}${time}`, { encoding: 'utf-8' })
  console.log(output)

} catch (error) {
  core.setFailed(error.message);
}