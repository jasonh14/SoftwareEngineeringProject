import React from "react";
import logo from "src/assets/lososola2.png";
import bg_top from "src/assets/bg_top_no_sola.png";
import bg_bot from "src/assets/bg_bottom_no_sola.png";
import { useNavigate } from "react-router-dom";

const TeacherTerms = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/teacher/signup", { state: { agree: true } });
  };
  return (
    <div className="bg-[#E4CFFF]">
      <img src={bg_top} alt="bg_top" />
      <div className="flex justify-center items-center font-gaegu font-bold flex-col py-9 gap-3">
        <img src={logo} alt="logo" className="h-[400px] mt-[-350px] relative" />
      </div>

      <div className="rounded-3xl p-20 bg-white bg-opacity-50 gap-4 justify-center mx-auto my-100 w-7/12 overflow-y-auto h-screen ">
        <div className="text-2xl font-montserrat mx-auto ">
          <p className="flex justify-center text-4xl pb-20 underline">
            <b>Terms and Conditions</b>
          </p>
          <p className="justify-center">
            <b>Welcome to Sola!</b>
            <br />
            <br />
            These terms and conditions outline the rules and regulations for the
            use of Sola's Website, located at sola.com.
            <br />
            <br />
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Sola if you do not agree to take
            all of the terms and conditions stated on this page.
            <br />
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            “Client”, “You” and “Your” refers to you, the person log on this
            website and compliant to the Sola's terms and conditions. “Sola”,
            “Ourselves”, “We”, “Our” and “Us”, refers to Sola. “Party”,
            “Parties”, or “Us”, refers to both the Client and ourselves. All
            terms refer to the offer, acceptance and consideration of payment
            necessary to undertake the process of our assistance to the Client
            in the most appropriate manner for the express purpose of meeting
            the Client's needs in respect of provision of the Sola's stated
            services, in accordance with and subject to, prevailing law of
            Netherlands. Any use of the above terminology or other words in the
            singular, plural, capitalization and/or he/she or they, are taken as
            interchangeable and therefore as referring to same.
            <br />
            <br />
            <b>Cookies</b>
            <br />
            We employ the use of cookies. By accessing Sola, you agreed to use
            cookies in agreement with the Sola's Privacy Policy.
            <br />
            <br />
            Most interactive websites use cookies to let us retrieve the user's
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
            <br />
            <br />
            <b>License</b>
            <br />
            Unless otherwise stated, Sola and/or its licensors own the
            intellectual property rights for all material on Sola. All
            intellectual property rights are reserved. You may access this from
            Sola for your own personal use subjected to restrictions set in
            these terms and conditions.
            <br />
            <br />
            You must not:
            <br />
            - Republish material from Sola
            <br />
            - Sell, rent or sub-license material from Sola
            <br />
            - Reproduce, duplicate or copy material from Sola
            <br />
            - Redistribute content from Sola
            <br />
            <br />
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            Sola does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and
            opinions of Sola,its agents and/or affiliates. Comments reflect the
            views and opinions of the person who posts their views and opinions.
            To the extent permitted by applicable laws, Sola shall not be liable
            for the Comments or for any liability, damages or expenses caused
            and/or suffered as a result of any use of and/or posting of and/or
            appearance of the Comments on this website.
            <br />
            Sola reserves the right to monitor all Comments and to remove any
            Comments which can be considered inappropriate, offensive or causes
            breach of these Terms and Conditions.
            <br />
            You warrant and represent that:
            <br />
            - You are entitled to post the Comments on our website and have all
            necessary licenses and consents to do so;
            <br />
            - The Comments do not invade any intellectual property right,
            including without limitation copyright, patent or trademark of any
            third party;
            <br />
            - The Comments do not contain any defamatory, libelous, offensive,
            indecent or otherwise unlawful material which is an invasion of
            privacy
            <br />
            - The Comments will not be used to solicit or promote business or
            custom or present commercial activities or unlawful activity.
            <br />
            <br />
            You hereby grant Sola a non-exclusive license to use, reproduce,
            edit and authorize others to use, reproduce and edit any of your
            Comments in any and all forms, formats or media.
            <br />
            <br />
            <b>Hyperlinking to our Content</b>
            <br />
            The following organizations may link to our Website without prior
            written approval:
            <br />
            - Government agencies;
            <br />
            - Search engines;
            <br />
            - News organizations;
            <br />
            - Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses;
            and
            <br />
            - System wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Website.
            <br />
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party's site.
            <br />
            <br />
            We may consider and approve other link requests from the following
            types of organizations:
            <br />
            - commonly-known consumer and/or business information sources;
            <br />
            - dot.com community sites;
            <br />
            - associations or other groups representing charities;
            <br />
            - online directory distributors;
            <br />
            - internet portals;
            <br />
            - accounting, law and consulting firms; and
            <br />
            - educational institutions and trade associations.
            <br />
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of Sola; and (d)
            the link is in the context of general resource information.
            <br />
            <br />
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party's site.
            <br />
            <br />
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an email to Sola. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Website, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
            <br />
            <br />
            Approved organizations may hyperlink to our Website as follows:
            <br />
            - By use of our corporate name; or
            <br />
            - By use of the uniform resource locator being linked to; or
            <br />
            - By use of any other description of our Website being linked to
            that makes sense within the context and format of content on the
            linking party's site.
            <br />
            <br />
            No use of Sola's logo or other artwork will be allowed for linking
            absent a trademark license agreement.
            <br />
            <br />
            <b>iFrames</b>
            <br />
            Without prior approval and written permission, you may not create
            frames around our Web Pages that alter in any way the visual
            presentation or appearance of our Website.
            <br />
            <br />
            <b>Content Liability</b>
            <br />
            We shall not be held responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that are rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
            <br />
            <br />
            <b>Reservation of Rights</b>
            <br />
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amend these terms and conditions and its linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
            <br />
            <br />
            <b>Removal of links from our website</b>
            <br />
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
            <br />
            <br />
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
            <br />
            <br />
            <b>Disclaimer</b>
            <br />
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
            <br />
            <br />
            - limit or exclude our or your liability for death or personal
            injury;
            <br />
            - limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
            <br />
            - limit any of our or your liabilities in any way that is not
            permitted under applicable law; or
            <br />
            - exclude any of our or your liabilities that may not be excluded
            under applicable law.
            <br />
            <br />
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
            <br />
            <br />
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
            <br />
          </p>
        </div>
      </div>
      {/* Apply Button */}
      <div className="justify-center flex relative">
        <button
          onClick={handleClick}
          className="bg-[#D2AFFF] font-gaegu text-4xl px-24 py-5 my-16 rounded-full cursor-pointer hover:bg-[#6619ff] transition duration-200"
        >
          I have read the terms and agreements
        </button>
      </div>
      <img src={bg_bot} alt="bg_bot" className="mt-[-500px]" />
    </div>
  );
};

export default TeacherTerms;
