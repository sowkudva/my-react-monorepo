import FileObject from './FileObject'

export default function FileList({ fileList, level }) {
  const directories = fileList.filter((file) => file.children)
  directories.sort((a, b) => a.name.localeCompare(b.name))

  const nonDirectories = fileList.filter((file) => !file.children)
  nonDirectories.sort((a, b) => a.name.localeCompare(b.name))
  const sortedItems = [...directories, ...nonDirectories]

  return (
    <ul>
      {sortedItems.map((file) => {
        return <FileObject file={file} level={level} />
      })}
    </ul>
  )
}
