const core = require('@actions/core')
const execSync = require('child_process').execSync

try {

  // Getting the directory to backup
  const workingDir = core.getInput('workingDir');
  const targetDir = workingDir + core.getInput('dir');
  console.log(`Directory to backup: ${targetDir}`);

  // Getting the backup directory
  const backupDir = core.getInput('backupDir');
  const outputDir = backupDir + core.getInput('dir');
  console.log(`Output directory: ${outputDir}`);
  
  // Prepare the directories for the backup
  execSync(`rm -rf ${outputDir}`)
  execSync(`mkdir -p ${outputDir}`)
  execSync(`mkdir -p ${targetDir}`)
  
  // Copy the file to backup
  const output = execSync(`rsync -r ${targetDir}/ ${outputDir}/`)
  console.log(output)

} catch (error) {
  core.setFailed(error.message);
}