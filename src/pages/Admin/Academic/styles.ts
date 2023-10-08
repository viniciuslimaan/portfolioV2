import ReactQuill from 'react-quill';

import styled from 'styled-components';

export const CustomQuill = styled(ReactQuill)`
  background: #000b29;
  border-radius: 5px;
  margin-top: 5px;

  .ql-toolbar,
  .ql-container {
    border: none;
  }

  .ql-toolbar {
    background-color: #fff;
    border-radius: 5px 5px 0 0;
  }

  .ql-container p,
  .ql-editor blockquote,
  .ql-editor li {
    color: #fff;
  }

  .ql-editor {
    min-height: 100px;
  }

  .ql-editor::before {
    font-style: normal;
    font-size: 1rem;
    color: #757575;
  }
`;
