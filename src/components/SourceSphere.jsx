import { forwardRef } from 'react';

const SourceSphere = forwardRef(function SourceSphere(_, ref) {
  return (
    <div ref={ref} className="src">
      <img src="assets/el_mark.png" style={{ width: 80 }} alt="" />
      <img src="assets/el_word.png" style={{ width: 106 }} alt="Elshayeb" />
    </div>
  );
});

export default SourceSphere;
