const core = require('@actions/core')
const github = require('@actions/github')
const execSync = require('child_process').execSync

try {

  const targetDir = core.getInput('dir');
  console.log(`Directory to backup: ${targetDir}!`);

  const outputDir = targetDir.replace('/static/laboratory', '/backup')
  console.log(`Output directory: ${outputDir}!`);
  
  const time = (new Date()).getMilliseconds();
  console.log(time)
  
  execSync(`mkdir -p ${targetDir}`, { encoding: 'utf-8' })
  execSync(`mkdir -p ${outputDir}/${time}`, { encoding: 'utf-8' })
  const output = execSync(`cp -r ${targetDir} ${outputDir}/${time}`, { encoding: 'utf-8' })
  console.log(output)

} catch (error) {
  core.setFailed(error.message);
}