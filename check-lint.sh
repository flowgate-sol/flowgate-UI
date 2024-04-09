for file in $(git diff --diff-filter=d --name-only --cached | grep -E '\.(tsx|scss|ts)$'); do
  if [[ $file != *.scss ]]; then
    git show ":$file" | next lint --file "$file" --quiet
    lint_exit_code=$?

    if [ $lint_exit_code -ne 0 ]; then
      echo "Lint check failed on staged file '$file'. You can run lint manually via yarn lint."
      exit 1 # exit with failure status
    fi
  fi

  prettier --check --log-level silent "$file"
  prettier_exit_code=$?

  if [ $prettier_exit_code -ne 0 ]; then
    echo "Format check failed on staged file '$file'. You can run reformat manually via yarn format:fix."
    exit 1 # exit with failure status
  fi
done

exit 0
