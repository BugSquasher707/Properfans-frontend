import { openLink } from "api/integration/functions"
import { DATE } from "libs/constants"
import { SubscriptionInvoiceInterface, SubscriptionManageInterface } from "libs/interfaces"
import moment from "moment"
import React from "react"
import { MdFileDownload, MdPictureAsPdf } from "react-icons/md"

const ModalSubscriptionInvoice = ({ profile }: { profile: SubscriptionManageInterface }) => {
  return (
    <>
      <div className="w-full">
        <div className="mb-20 w-full text-14 text-grey-40">Download invoice</div>
        <div className="-mx-12 max-h-[411px] w-[calc(100%+24px)] overflow-x-auto">
          <div className="w-full">
            <div className="mb-10 flex w-max min-w-full justify-between gap-20 px-12">
              <div className="w-[160px] text-12 text-grey-40">Invoice</div>
              <div className="w-[100px] text-12 text-grey-40">Date</div>
              <div className="w-[90px] text-12 text-grey-40"></div>
            </div>
            <div className="w-full">
              {profile.invoices.map((invoice: SubscriptionInvoiceInterface, key: number) => (
                <button
                  key={key}
                  className="group w-max min-w-full rounded-4 px-12 hover:bg-grey-3"
                  onClick={(e) => openLink(e, invoice.invoice_pdf)}
                >
                  <div className="flex w-max min-w-full items-center justify-between gap-20 py-20">
                    <div className="grid w-[160px] grid-cols-[auto,1fr] items-center gap-10">
                      <MdPictureAsPdf className="text-18 text-grey-20" />
                      <div className="text-14 font-bold text-black">{invoice.number}</div>
                    </div>
                    <div className="w-[100px] text-left text-12 text-grey-40">
                      {moment(invoice.created * 1000).format(DATE.SHORT)}
                    </div>
                    <div className="grid w-[90px] grid-cols-[auto,1fr] items-center gap-8">
                      <MdFileDownload className="text-grey-20 group-hover:text-purple" />
                      <div className="text-14 font-bold text-black group-hover:text-purple">Download</div>
                    </div>
                  </div>
                  <div className="w-full border-b-1 border-grey-6 group-hover:border-white"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalSubscriptionInvoice
