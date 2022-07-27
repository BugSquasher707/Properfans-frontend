import Editor from "@draft-js-plugins/editor"
import { CompositeDecorator, convertFromRaw, EditorState } from "draft-js"
import { URL } from "libs/constants"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const DraftContent = ({ content }: { content: any }) => {
  const HANDLE_REGEX = /\@[\w]+/g

  const findWithRegex = (regex: any, contentBlock: any, callback: any) => {
    const text = contentBlock.getText()
    let matchArr, start
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index
      callback(start, start + matchArr[0].length)
    }
  }

  const handleStrategy = (contentBlock: any, callback: any) => {
    findWithRegex(HANDLE_REGEX, contentBlock, callback)
  }

  const HandleSpan = (props: any) => {
    const tag = props.decoratedText.replace("@", "")

    return (
      <Link
        className="rounded-full bg-purple-10 pl-8 pr-12 pt-6 pb-8 text-14 font-bold text-purple hover:bg-purple hover:text-white"
        to={URL.BRANDS.BASE.replace(":param", tag)}
      >
        @{tag}
      </Link>
    )
  }

  const compositeDecorator = new CompositeDecorator([
    {
      strategy: handleStrategy,
      component: HandleSpan
    }
  ])

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(compositeDecorator))

  useEffect(() => {
    onMessage()
  }, [])

  const onMessage = () => {
    setEditorState(() => EditorState.createWithContent(convertFromRaw(content), compositeDecorator))
  }

  return (
    <>
      <Editor editorState={editorState} readOnly={true} onChange={() => null} />
    </>
  )
}

export default DraftContent
