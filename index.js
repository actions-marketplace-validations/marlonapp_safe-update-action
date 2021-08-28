const core = require('@actions/core')
const execSync = require('child_process').execSync

try {

  const targetDir = core.getInput('dir');
  console.log(`Directory to backup: ${targetDir}`);

  const outputDir = targetDir.replace('/static/laboratory', '/backup')
  console.log(`Output directory: ${outputDir}`);
  
  execSync(`mkdir -p ${targetDir}`, { encoding: 'utf-8' })

  execSync(`rm -rf ${outputDir}`, { encoding: 'utf-8' })
  execSync(`mkdir -p ${outputDir}`, { encoding: 'utf-8' })

  const output = execSync(`rsync -r ${targetDir}/ ${outputDir}/`, { encoding: 'utf-8' })
  console.log(output)

} catch (error) {
  core.setFailed(error.message);
}