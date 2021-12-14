module.exports = {
  '**/*.ts?(x)': (filenames) =>
    [`next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`, `jest --maxWorkers=50% --bail --findRelatedTests ${filenames
        .join(' ')}`],
}
