import Newsletter from "../components/Newsletter";
import MailchimpSubscribe from "react-mailchimp-subscribe"



const MailChimp = () => {
  const postUrl = `${'https://gmail.us17.list-manage.com/subscribe/post'}`;
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

export default MailChimp;

