import { EditorState, Modifier } from "draft-js"

export const insertCharacter = (characterToInsert: string, editorState: EditorState) => {
  const currentContent = editorState.getCurrentContent(),
    currentSelection = editorState.getSelection()

  const newContent = Modifier.replaceText(currentContent, currentSelection, characterToInsert)

  return EditorState.push(editorState, newContent, "insert-characters")
}
