import { PageInterface } from "libs/interfaces"
import React from "react"
import PageDropdown from "utils/lists/PageDropdown"
import PageItem from "utils/lists/PageItem"

const PageList = ({ pages, line, minimized }: { pages: PageInterface[]; line: boolean; minimized?: boolean }) => {
  return (
    <>
      <div className="grid w-full gap-8">
        {pages.map((page: PageInterface, key: number) => (
          <div key={key} className="w-full">
            {page.dropdown ? (
              <PageDropdown line={line} minimized={minimized ?? false} page={page} />
            ) : (
              <PageItem minimized={minimized ?? false} page={page} />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default PageList
