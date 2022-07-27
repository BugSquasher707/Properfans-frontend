import Editor from "@draft-js-plugins/editor"
import createLinkifyPlugin from "@draft-js-plugins/linkify"
import createMentionPlugin from "@draft-js-plugins/mention"
import { statusApi } from "api/endpoints/status"
import { useProps } from "contexts/PropsContext"
import { EditorState } from "draft-js"
import { MentionData, ProfileInterface } from "libs/interfaces"
import React, { useCallback, useMemo, useRef, useState } from "react"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "@draft-js-plugins/mention/lib/plugin.css"
import "@draft-js-plugins/hashtag/lib/plugin.css"
import "@draft-js-plugins/linkify/lib/plugin.css"
import "@draft-js-plugins/counter/lib/plugin.css"

const FanFeedPostingArea = ({
  open,
  editorState,
  setEditorState
}: {
  open: boolean
  editorState: EditorState
  setEditorState: any
}) => {
  const { token } = useProps()

  const ref = useRef<Editor>(null)

  const [openSuggestions, setOpenSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<MentionData[]>([])

  const { MentionSuggestions, plugins } = useMemo(() => {
    const linkifyPlugin = createLinkifyPlugin()
    const mentionPlugin = createMentionPlugin({
      mentionPrefix: "@",
      mentionTrigger: "@",
      entityMutability: "IMMUTABLE",
      supportWhitespace: true
    })

    const { MentionSuggestions } = mentionPlugin

    const plugins = [linkifyPlugin, mentionPlugin]
    return { plugins, MentionSuggestions }
  }, [])

  const onOpenChange = useCallback((_open: boolean) => {
    setOpenSuggestions(_open)
  }, [])

  const onSearchChange = useCallback(({ value }: { value: string }) => {
    onSuggestions(value)
  }, [])

  const onSuggestions = async (tag: string) => {
    if (!tag) {
      return
    }

    console.log(token)

    const result = await statusApi()

    if (result) {
      const newSuggestions = result.map((result: ProfileInterface) => ({
        ...result,
        name: result.handle
      }))

      setSuggestions(newSuggestions)
    }
  }

  return (
    <div className="w-full">
      {open ? (
        <div className="min-h-[70px] leading-[32px] text-black" onClick={() => ref.current!.focus()}>
          <Editor
            ref={ref}
            editorKey={"editor"}
            editorState={editorState}
            placeholder={"Start posting..."}
            plugins={plugins}
            onChange={setEditorState}
          />
          <MentionSuggestions
            open={openSuggestions}
            suggestions={suggestions}
            onAddMention={() => null}
            onOpenChange={onOpenChange}
            onSearchChange={onSearchChange}
          />
        </div>
      ) : (
        <div className="w-full text-14 font-bold text-grey-40">Start posting...</div>
      )}
    </div>
  )
}

export default FanFeedPostingArea
