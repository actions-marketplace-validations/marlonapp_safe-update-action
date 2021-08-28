# Safe update action

This action create a backup of the `dir`

## Inputs

`workingDir`

**Required** The working directory.

`backupDir`

**Required** The backup directory.

`dir`

**Required** The directory to backup.


## Example usage

```
  uses: marlonapp/safe-update-action@v4.0
  with:
    workingDir: ~/static/laboratory
    backupDir: ~/backup
    dir: /plugins/text
```