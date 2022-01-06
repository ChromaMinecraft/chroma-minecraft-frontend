const InnerChildHTML = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

export default InnerChildHTML;
