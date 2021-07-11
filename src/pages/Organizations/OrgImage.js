import React, { Suspense } from 'react';
import { useImage } from 'react-image';

// https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <p>EB</p>;
    }
    return this.props.children;
  }
}

const MyImageComponent = (props) => {
  const { src: propsSrc, ...rest } = props;
  const { src } = useImage({
    srcList: propsSrc,
    fallback: '/images/default-github-repo-image.png',
  });

  return <img src={src} {...rest} />;
};

const OrgImage = ({...rest}) => {
  return (
    <ErrorBoundary>
      <Suspense>
        <MyImageComponent {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default OrgImage;
