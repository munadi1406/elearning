import PropTypes from 'prop-types'
export default function SplitUsername({username}) {
  const splitUsername = username.split(" ");
  if (splitUsername.length > 0) {
    const getFirstChar = splitUsername.map((e) => e.slice(0, 1));
    const text = getFirstChar.join("");
    return <>{text}</>;
  } else {
    const text = splitUsername.split(0, 1);
    return <>{text}</>;
  }
}

SplitUsername.propTypes={
  username:PropTypes.string.isRequired
}
