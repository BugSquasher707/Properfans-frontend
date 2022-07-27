import { openLink } from "api/integration/functions"
import PolicyDownload from "components/policies/PolicyDownload"
import React from "react"
import { Link } from "react-router-dom"
import { Link as LinkScroll } from "react-scroll"

const PolicyPrivacy = ({ handler }: { handler: any }) => {
  return (
    <>
      <div className="w-full">
        <PolicyDownload
          data={{
            link: "/documents/ProperfansPrivacyNotice.pdf",
            title: "Privacy Notice"
          }}
        />
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="collecting">
          1. WHAT INFORMATION DO WE COLLECT?
        </div>
        <div className="mb-16 w-full text-14 font-bold text-black">Personal information you disclose to us</div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> We collect personal information that you provide to us
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We collect personal information that you voluntarily provide to us when you register on the Website, express
          an interest in obtaining information about us or our products and Services, when you participate in activities
          on the Website (such as by posting messages in our online forums or entering competitions, contests or
          giveaways) or otherwise when you contact us.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          The personal information that we collect depends on the context of your interactions with us and the Website,
          the choices you make and the products and features you use. The personal information we collect may include
          the following:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">Personal Information Provided by You.</span> We collect names; phone
          numbers; email addresses; mailing addresses; usernames; passwords; contact preferences; billing addresses;
          contact or authentication data; gender; birth date; and other similar information.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">Payment Data.</span> We may collect data necessary to process your
          payment if you make purchases, such as your payment instrument number (such as a credit card number), and the
          security code associated with your payment instrument. All payment data is stored by Stripe. You may find
          their privacy notice link(s) here:{" "}
          <Link
            className="font-bold text-purple"
            target="_blank"
            to="route"
            onClick={(event) => {
              openLink(event, "https://stripe.com/en-no/privacy")
            }}
          >
            https://stripe.com/en-no/privacy
          </Link>
          .
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">Social Media Login Data.</span> We may provide you with the option to
          register with us using your existing social media account details, like your Facebook, Twitter or other social
          media account. If you choose to register in this way, we will collect the information described in the section
          called{" "}
          <LinkScroll
            className="cursor-pointer font-bold text-purple"
            offset={-110}
            to={"logins"}
            onClick={() => handler(5)}
          >
            &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot;
          </LinkScroll>{" "}
          below.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          All personal information that you provide to us must be true, complete and accurate, and you must notify us of
          any changes to such personal information.
        </div>
        <div className="mb-16 w-full text-14 font-bold text-black">Information automatically collected</div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> Some information — such as your Internet Protocol (IP)
          address and/or browser and device characteristics — is collected automatically when you visit our Website.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We automatically collect certain information when you visit, use or navigate the Website. This information
          does not reveal your specific identity (like your name or contact information) but may include device and
          usage information, such as your IP address, browser and device characteristics, operating system, language
          preferences, referring URLs, device name, country, location, information about how and when you use our
          Website and other technical information. This information is primarily needed to maintain the security and
          operation of our Website, and for our internal analytics and reporting purposes.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          Like many businesses, we also collect information through cookies and similar technologies.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">The information we collect includes:</div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          <ul className=" list-inside list-disc">
            <li>
              Log and Usage Data. Log and usage data is service-related, diagnostic, usage and performance information
              our servers automatically collect when you access or use our Website and which we record in log files.
              Depending on how you interact with us, this log data may include your IP address, device information,
              browser type and settings and information about your activity in the Website (such as the date/time stamps
              associated with your usage, pages and files viewed, searches and other actions you take such as which
              features you use), device event information (such as system activity, error reports (sometimes called
              &apos;crash dumps&apos;) and hardware settings).
            </li>
            <li>
              Device Data. We collect device data such as information about your computer, phone, tablet or other device
              you use to access the Website. Depending on the device used, this device data may include information such
              as your IP address (or proxy server), device and application identification numbers, location, browser
              type, hardware model Internet service provider and/or mobile carrier, operating system and system
              configuration information.
            </li>
            <li>
              Location Data. We collect location data such as information about your device&apos;s location, which can
              be either precise or imprecise. How much information we collect depends on the type and settings of the
              device you use to access the Website. For example, we may use GPS and other technologies to collect
              geolocation data that tells us your current location (based on your IP address). You can opt out of
              allowing us to collect this information either by refusing access to the information or by disabling your
              Location setting on your device. Note however, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </li>
          </ul>
        </div>
        <div className="mb-16 w-full text-14 font-bold text-black">Information collected from other sources</div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> We may collect limited data from public databases,
          marketing partners, social media platforms, and other outside sources.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          In order to enhance our ability to provide relevant marketing, offers and services to you and update our
          records, we may obtain information about you from other sources, such as public databases, joint marketing
          partners, affiliate programs, data providers, social media platforms, as well as from other third parties.
          This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user
          behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs and custom
          profiles, for purposes of targeted advertising and event promotion. If you interact with us on a social media
          platform using your social media account (e.g. Facebook or Twitter), we receive personal information about you
          such as your name, email address, and gender. Any personal information that we collect from your social media
          account depends on your social media account&apos;s privacy settings.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="using">
          2. HOW DO WE USE YOUR INFORMATION?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> We process your information for purposes based on
          legitimate business interests, the fulfillment of our contract with you, compliance with our legal
          obligations, and/or your consent.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We use personal information collected via our Website for a variety of business purposes described below. We
          process your personal information for these purposes in reliance on our legitimate business interests, in
          order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
          obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">We use the information we collect or receive:</div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          <ul className=" list-inside list-disc">
            <li>
              <span className="font-bold text-black">To facilitate account creation and logon process. </span> If you
              choose to link your account with us to a third-party account (such as your Google or Facebook account), we
              use the information you allowed us to collect from those third parties to facilitate account creation and
              logon process for the performance of the contract. See the section below headed{" "}
              <LinkScroll
                className="cursor-pointer font-bold text-purple"
                offset={-110}
                to={"logins"}
                onClick={() => handler(5)}
              >
                &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot;
              </LinkScroll>{" "}
              for further information.
            </li>
            <li>
              <span className="font-bold text-black">To post testimonials.</span> We post testimonials on our Website
              that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use
              your name and the content of the testimonial. If you wish to update, or delete your testimonial, please
              contact us at privacy@properfans.com and be sure to include your name, testimonial location, and contact
              information.
            </li>
            <li>
              <span className="font-bold text-black">Request feedback.</span> We may use your information to request
              feedback and to contact you about your use of our Website.
            </li>
            <li>
              <span className="font-bold text-black">To enable user-to-user communications.</span> We may use your
              information in order to enable user-to-user communications with each user&apos;s consent.
            </li>
            <li>
              <span className="font-bold text-black">To manage user accounts.</span> We may use your information for the
              purposes of managing our account and keeping it in working order.
            </li>
            <li>
              <span className="font-bold text-black">To send administrative information to you.</span> We may use your
              personal information to send you product, service and new feature information and/or information about
              changes to our terms, conditions, and policies.
            </li>
            <li>
              <span className="font-bold text-black">To protect our Services.</span> We may use your information as part
              of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).
            </li>
            <li>
              <span className="font-bold text-black">
                To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory
                requirements or in connection with our contract.
              </span>
            </li>
            <li>
              <span className="font-bold text-black">To respond to legal requests and prevent harm.</span> If we receive
              a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.
            </li>
            <li>
              <span className="font-bold text-black">Fulfill and manage your orders.</span> We may use your information
              to fulfill and manage your orders, payments, returns, and exchanges made through the Website.
            </li>
            <li>
              <span className="font-bold text-black">Administer prize draws and competitions.</span> We may use your
              information to administer prize draws and competitions when you elect to participate in our competitions.
            </li>
            <li>
              <span className="font-bold text-black">To deliver and facilitate delivery of services to the user.</span>{" "}
              We may use your information to provide you with the requested service.
            </li>
            <li>
              <span className="font-bold text-black">To respond to user inquiries/offer support to users.</span> We may
              use your information to respond to your inquiries and solve any potential issues you might have with the
              use of our Services.
            </li>
            <li>
              <span className="font-bold text-black">To send you marketing and promotional communications.</span> We
              and/or our third-party marketing partners may use the personal information you send to us for our
              marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing
              an interest in obtaining information about us or our Website, subscribing to marketing or otherwise
              contacting us, we will collect personal information from you. You can opt-out of our marketing emails at
              any time (see the{" "}
              <LinkScroll
                className="cursor-pointer font-bold text-purple"
                offset={-110}
                to={"rights"}
                onClick={() => handler(9)}
              >
                &quot;WHAT ARE YOUR PRIVACY RIGHTS?&quot;
              </LinkScroll>{" "}
              below).
            </li>
            <li>
              <span className="font-bold text-black">Deliver targeted advertising to you. </span> We may use your
              information to develop and display personalized content and advertising (and work with third parties who
              do so) tailored to your interests and/or location and to measure its effectiveness.
            </li>
            <li>
              <span className="font-bold text-black">For other business purposes.</span> We may use your information for
              other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of
              our promotional campaigns and to evaluate and improve our Website, products, marketing and your
              experience. We may use and store this information in aggregated and anonymized form so that it is not
              associated with individual end users and does not include personal information. We will not use
              identifiable personal information without your consent.
            </li>
          </ul>
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="sharing">
          3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> We only share information with your consent, to comply
          with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We may process or share your data that we hold based on the following legal basis:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <ul className=" list-inside list-disc">
            <li>
              <span className="font-bold text-black">Consent:</span> We may process your data if you have given us
              specific consent to use your personal information for a specific purpose.
            </li>
            <li>
              <span className="font-bold text-black">Legitimate Interests:</span> We may process your data when it is
              reasonably necessary to achieve our legitimate business interests.
            </li>
            <li>
              <span className="font-bold text-black">Performance of a Contract:</span> Where we have entered into a
              contract with you, we may process your personal information to fulfill the terms of our contract.
            </li>
            <li>
              <span className="font-bold text-black">Legal Obligations:</span> We may disclose your information where we
              are legally required to do so in order to comply with applicable law, governmental requests, a judicial
              proceeding, court order, or legal process, such as in response to a court order or a subpoena (including
              in response to public authorities to meet national security or law enforcement requirements).
            </li>
            <li>
              <span className="font-bold text-black">Vital Interests:</span> We may disclose your information where we
              believe it is necessary to investigate, prevent, or take action regarding potential violations of our
              policies, suspected fraud, situations involving potential threats to the safety of any person and illegal
              activities, or as evidence in litigation in which we are involved.
            </li>
          </ul>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          More specifically, we may need to process your data or share your personal information in the following
          situations:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          <ul className=" list-inside list-disc">
            <li>
              <span className="font-bold text-black">Business Transfers.</span> We may share or transfer your
              information in connection with, or during negotiations of, any merger, sale of company assets, financing,
              or acquisition of all or a portion of our business to another company.
            </li>
            <li>
              <span className="font-bold text-black">Business Partners.</span> We may share your information with our
              business partners to offer you certain products, services or promotions.
            </li>
            <li>
              <span className="font-bold text-black">Other Users.</span> When you share personal information (for
              example, by posting comments, contributions or other content to the Website) or otherwise interact with
              public areas of the Website, such personal information may be viewed by all users and may be publicly made
              available outside the Website in perpetuity. If you interact with other users of our Website and register
              for our Website through a social network (such as Facebook), your contacts on the social network will see
              your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view
              descriptions of your activity, communicate with you within our Website, and view your profile.
            </li>
          </ul>
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="cookies">
          4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> We may use cookies and other tracking technologies to
          collect and store your information.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
          information. Specific information about how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="logins">
          5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> If you choose to register or log in to our services
          using a social media account, we may have access to certain information about you.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          Our Website offers you the ability to register and login using your third-party social media account details
          (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile
          information about you from your social media provider. The profile information we receive may vary depending
          on the social media provider concerned, but will often include your name, email address, friends list, profile
          picture as well as other information you choose to make public on such social media platform.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          We will use the information we receive only for the purposes that are described in this privacy notice or that
          are otherwise made clear to you on the relevant Website. Please note that we do not control, and are not
          responsible for, other uses of your personal information by your third-party social media provider. We
          recommend that you review their privacy notice to understand how they collect, use and share your personal
          information, and how you can set your privacy preferences on their sites and apps.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="third-party">
          6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> We are not responsible for the safety of any
          information that you share with third-party providers who advertise, but are not affiliated with, our Website.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          The Website may contain advertisements from third parties that are not affiliated with us and which may link
          to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data
          you provide to any third parties. Any data collected by third parties is not covered by this privacy notice.
          We are not responsible for the content or privacy and security practices and policies of any third parties,
          including other websites, services or applications that may be linked to or from the Website. You should
          review the policies of such third parties and contact them directly to respond to your questions.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="storing">
          7. HOW LONG DO WE KEEP YOUR INFORMATION?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> We keep your information for as long as necessary to
          fulfill the purposes outlined in this privacy notice unless otherwise required by law.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We will only keep your personal information for as long as it is necessary for the purposes set out in this
          privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or
          other legal requirements). No purpose in this notice will require us keeping your personal information for
          longer than three (3) months past the termination of the user&apos;s account.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          When we have no ongoing legitimate business need to process your personal information, we will either delete
          or anonymize such information, or, if this is not possible (for example, because your personal information has
          been stored in backup archives), then we will securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="safety">
          8. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> We aim to protect your personal information through a
          system of organizational and technical security measures.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          We have implemented appropriate technical and organizational security measures designed to protect the
          security of any personal information we process. However, despite our safeguards and efforts to secure your
          information, no electronic transmission over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third
          parties will not be able to defeat our security, and improperly collect, access, steal, or modify your
          information. Although we will do our best to protect your personal information, transmission of personal
          information to and from our Website is at your own risk. You should only access the Website within a secure
          environment.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="rights">
          9. WHAT ARE YOUR PRIVACY RIGHTS?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> In some regions, such as the European Economic Area
          (EEA) and United Kingdom (UK), you have rights that allow you greater access to and control over your personal
          information. You may review, change, or terminate your account at any time.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These
          may include the right (i) to request access and obtain a copy of your personal information, (ii) to request
          rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if
          applicable, to data portability. In certain circumstances, you may also have the right to object to the
          processing of your personal information. To make such a request, please use the{" "}
          <LinkScroll
            className="cursor-pointer font-bold text-purple"
            offset={-110}
            to={"contact"}
            onClick={() => handler(13)}
          >
            contact details
          </LinkScroll>{" "}
          provided below. We will consider and act upon any request in accordance with applicable data protection laws.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          If we are relying on your consent to process your personal information, you have the right to withdraw your
          consent at any time. Please note however that this will not affect the lawfulness of the processing before its
          withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful
          processing grounds other than consent.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information,
          you also have the right to complain to your local data protection supervisory authority. You can find their
          contact details here:{" "}
          <Link
            className="font-bold text-purple"
            target="_blank"
            to="route"
            onClick={(event) => {
              openLink(event, "https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm")
            }}
          >
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </Link>
          .
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          If you are a resident in Switzerland, the contact details for the data protection authorities are available
          here:{" "}
          <Link
            className="font-bold text-purple"
            target="_blank"
            to="route"
            onClick={(event) => {
              openLink(event, "https://www.edoeb.admin.ch/edoeb/en/home.html")
            }}
          >
            https://www.edoeb.admin.ch/edoeb/en/home.html
          </Link>
          .
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          If you have questions or comments about your privacy rights, you may email us at{" "}
          <Link
            className="font-bold text-purple"
            target="_blank"
            to="route"
            onClick={(event) => {
              openLink(event, "mailto:privacy@properfans.com")
            }}
          >
            privacy@properfans.com
          </Link>
          .
        </div>
        <div className="mb-16 w-full text-14 font-bold text-black">Account Information</div>
        <div className="mb-20 w-full text-14 text-grey-40">
          If you would at any time like to review or change the information in your account or terminate your account,
          you can:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          <ul className=" list-inside list-disc">
            <li>Log in to your account settings and update your user account.</li>
          </ul>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          Upon your request to terminate your account, we will deactivate or delete your account and information from
          our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot
          problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal
          requirements.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">Cookies and similar technologies:</span> Most Web browsers are set to
          accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to
          reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or
          services of our Website. To opt-out of interest-based advertising by advertisers on our Website visit{" "}
          <Link
            className="font-bold text-purple"
            target="_blank"
            to="route"
            onClick={(event) => {
              openLink(event, "https://www.aboutads.info/choices/")
            }}
          >
            https://www.aboutads.info/choices/
          </Link>
          .
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">Opting out of email marketing:</span> You can unsubscribe from our
          marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by
          contacting us using the details provided below. You will then be removed from the marketing email list —
          however, we may still communicate with you, for example to send you service-related emails that are necessary
          for the administration and use of your account, to respond to service requests, or for other non-marketing
          purposes. To otherwise opt-out, you may:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          <ul className=" list-inside list-disc">
            <li>Access your account settings and update your preferences.</li>
          </ul>
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="do-not-track">
          10. CONTROLS FOR DO-NOT-TRACK FEATURES
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
          (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about
          your online browsing activities monitored and collected. At this stage no uniform technology standard for
          recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT
          browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          If a standard for online tracking is adopted that we must follow in the future, we will inform you about that
          practice in a revised version of this privacy notice.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="california">
          11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> Yes, if you are a resident of California, you are
          granted specific rights regarding access to your personal information.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users
          who are California residents to request and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third parties for direct marketing purposes and
          the names and addresses of all third parties with which we shared personal information in the immediately
          preceding calendar year. If you are a California resident and would like to make such a request, please submit
          your request in writing to us using the contact information provided below.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          If you are under 18 years of age, reside in California, and have a registered account with the Website, you
          have the right to request removal of unwanted data that you publicly post on the Website. To request removal
          of such data, please contact us using the contact information provided below, and include the email address
          associated with your account and a statement that you reside in California. We will make sure the data is not
          publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively
          removed from all our systems (e.g. backups, etc.).
        </div>
        <div className="mb-16 w-full text-14 font-bold text-black">CCPA Privacy Notice</div>
        <div className="mb-20 w-full text-14 text-grey-40">
          The California Code of Regulations defines a &quot;resident&quot; as:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <ul className="list-inside list-decimal">
            <li>
              every individual who is in the State of California for other than a temporary or transitory purpose and
            </li>
            <li>
              every individual who is domiciled in the State of California who is outside the State of California for a
              temporary or transitory purpose
            </li>
          </ul>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          All other individuals are defined as &quot;non-residents.&quot;
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          If this definition of &quot;resident&quot; applies to you, we must adhere to certain rights and obligations
          regarding your personal information.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">What categories of personal information do we collect?</span>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We have collected the following categories of personal information in the past twelve (12) months:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A. Identifiers</td>
                <td>
                  Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique
                  personal identifier, online identifier, Internet Protocol address, email address and account name
                </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>B. Personal information categories listed in the California Customer Records statute</td>
                <td>Name, contact information, education, employment, employment history and financial information</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>C. Protected classification characteristics under California or federal law</td>
                <td>Gender and date of birth </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>D. Commercial information</td>
                <td>Transaction information, purchase history, financial details and payment information</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>E. Biometric information </td>
                <td>Fingerprints and voiceprints </td>
                <td>NO</td>
              </tr>
              <tr>
                <td>F. Internet or other similar network activity</td>
                <td>
                  Browsing history, search history, online behavior, interest data, and interactions with our and other
                  websites, applications, systems and advertisements
                </td>
                <td>NO</td>
              </tr>
              <tr>
                <td>G. Geolocation data </td>
                <td>Device location</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                <td>Images and audio, video or call recordings created in connection with our business activities</td>
                <td>NO</td>
              </tr>
              <tr>
                <td>I. Professional or employment-related information</td>
                <td>
                  Business contact details in order to provide you our services at a business level, job title as well
                  as work history and professional qualifications if you apply for a job with us
                </td>
                <td>NO</td>
              </tr>
              <tr>
                <td>J. Education Information</td>
                <td>Student records and directory information </td>
                <td>NO</td>
              </tr>
              <tr>
                <td>K. Inferences drawn from other personal information</td>
                <td>
                  Inferences drawn from any of the collected personal information listed above to create a profile or
                  summary about, for example, an individual’s preferences and characteristics
                </td>
                <td>YES</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We may also collect other personal information outside of these categories instances where you interact with
          us in-person, online, or by phone or mail in the context of:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <ul className="list-inside list-disc">
            <li>Receiving help through our customer support channels;</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>Participation in customer surveys or contests; and</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
          </ul>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">How do we use and share your personal information?</span>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          More information about our data collection and sharing practices can be found in this privacy notice.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          You may contact us by email at ccpa@properfans.com, by visiting{" "}
          <Link className="font-bold text-purple" to="/contact">
            contact
          </Link>
          , or by referring to the contact details at the bottom of this document.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized
          agent does not submit proof that they have been validly authorized to act on your behalf.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">Will your information be shared with anyone else?</span>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We may disclose your personal information with our service providers pursuant to a written contract between us
          and each service provider. Each service provider is a for-profit entity that processes the information on our
          behalf.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We may use your personal information for our own business purposes, such as for undertaking internal research
          for technological development and demonstration. This is not considered to be &quot;selling&quot; of your
          personal data
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          Ellingsen Group AS has not disclosed or sold any personal information to third parties for a business or
          commercial purpose in the preceding 12 months. Ellingsen Group AS will not sell personal information in the
          future belonging to website visitors, users and other consumers.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">Your rights with respect to your personal data</span>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 underline">
          Right to request deletion of the data - Request to delete
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          You can ask for the deletion of your personal information. If you ask us to delete your personal information,
          we will respect your request and delete your personal information, subject to certain exceptions provided by
          law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our
          compliance requirements resulting from a legal obligation or any processing that may be required to protect
          against illegal activities.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 underline">Right to be informed - Request to know</div>
        <div className="mb-20 w-full text-14 text-grey-40">
          Depending on the circumstances, you have a right to know:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <ul className="list-inside list-disc">
            <li>whether we collect and use your personal information;</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>the categories of personal information that we collect;</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>the purposes for which the collected personal information is used;</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>whether we sell your personal information to third parties;</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>
              the categories of third parties to whom the personal information was sold or disclosed for a business
              purpose; and
            </li>
          </ul>
          <ul className="list-inside list-disc">
            <li>the business or commercial purpose for collecting or selling personal information.</li>
          </ul>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          In accordance with applicable law, we are not obligated to provide or delete consumer information that is
          de-identified in response to a consumer request or to re-identify individual data to verify a consumer
          request.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 underline">
          Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We will not discriminate against you if you exercise your privacy rights.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 underline">Verification process</div>
        <div className="mb-20 w-full text-14 text-grey-40">
          Upon receiving your request, we will need to verify your identity to determine you are the same person about
          whom we have the information in our system. These verification efforts require us to ask you to provide
          information so that we can match it with information you have previously provided us. For instance, depending
          on the type of request you submit, we may ask you to provide certain information so that we can match the
          information you provide with the information we already have on file, or we may contact you through a
          communication method (e.g. phone or email) that you have previously provided to us. We may also use other
          verification methods as the circumstances dictate.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          We will only use personal information provided in your request to verify your identity or authority to make
          the request. To the extent possible, we will avoid requesting additional information from you for the purposes
          of verification. If, however, we cannot verify your identity from the information already maintained by us, we
          may request that you provide additional information for the purposes of verifying your identity, and for
          security or fraud-prevention purposes. We will delete such additionally provided information as soon as we
          finish verifying you.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 underline">Other privacy rights</div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          <ul className="list-inside list-disc">
            <li>you may object to the processing of your personal data</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>
              you may request correction of your personal data if it is incorrect or no longer relevant, or ask to
              restrict the processing of the data
            </li>
          </ul>
          <ul className="list-inside list-disc">
            <li>
              you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a
              request from an authorized agent that does not submit proof that they have been validly authorized to act
              on your behalf in accordance with the CCPA.
            </li>
          </ul>
          <ul className="list-inside list-disc">
            <li>
              you may request to opt-out from future selling of your personal information to third parties. Upon
              receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later
              than 15 days from the date of the request submission.
            </li>
          </ul>
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          To exercise these rights, you can contact us by email at ccpa@properfans.com, by visiting{" "}
          <Link className="font-bold text-purple" to="/contact">
            contact
          </Link>
          , or by referring to the contact details at the bottom of this document. If you have a complaint about how we
          handle your data, we would like to hear from you.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="updates">
          12. DO WE MAKE UPDATES TO THIS NOTICE?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          <span className="font-bold text-black">In Short:</span> Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          We may update this privacy notice from time to time. The updated version will be indicated by an updated
          &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by prominently posting a notice of such
          changes or by directly sending you a notification. We encourage you to review this privacy notice frequently
          to be informed of how we are protecting your information.
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="contact">
          13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </div>
        <div className="mb-20 w-full text-14 text-grey-40">
          If you have questions or comments about this notice, you may email us at{" "}
          <Link
            className="font-bold text-purple"
            target="_blank"
            to="route"
            onClick={(event) => {
              openLink(event, "mailto:privacy@properfans.com")
            }}
          >
            privacy@properfans.com
          </Link>{" "}
          or by post to:
        </div>
        <div className="mb-20 w-full text-14 text-grey-40 lg:mb-40">
          Ellingsen Group AS
          <br />
          <br />
          Markensvegen, Kongsvinger, Norway
          <br />
          <br /> Kongsvinger, Innlandet 2212
          <br />
          <br />
          Norway
        </div>
        <div className="stick-pol mb-16 w-full text-14 font-bold text-black" id="management">
          14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </div>
        <div className="w-full text-14 text-grey-40">
          Based on the applicable laws of your country, you may have the right to request access to the personal
          information we collect from you, change that information, or delete it in some circumstances. To request to
          review, update, or delete your personal information, please submit a request form by clicking{" "}
          <Link
            className="font-bold text-purple"
            target="_blank"
            to="route"
            onClick={(event) => {
              openLink(event, "https://app.termly.io/notify/13c6ee78-0781-43aa-995c-8367238e61c2")
            }}
          >
            here
          </Link>
          .
        </div>
      </div>
    </>
  )
}

export default PolicyPrivacy
