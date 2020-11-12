import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  main {
    flex: 1;
  }
`;

export const CreateOrphanageForm = styled.form`
  width: 70rem;
  max-width: 100%;
  margin: 6.4rem auto;

  background: #ffffff;
  border: 0.1rem solid #d3e2e5;
  border-radius: 2rem;
  padding: 6.4rem 8rem;
  overflow: hidden;

  fieldset {
    border: 0;
    + fieldset {
      margin-top: 8rem;
    }

    legend {
      width: 100%;

      font-size: 3.2rem;
      line-height: 3.4rem;
      color: #5c8599;
      font-weight: 700;

      border-bottom: 0.1rem solid #d3e2e5;
      margin-bottom: 4rem;
      padding-bottom: 2.4rem;
    }

    .input-block {
      + .input-block {
        margin-top: 2.4rem;
      }

      label {
        display: flex;
        color: #8fa7b3;
        margin-bottom: 0.8rem;
        line-height: 2.2rem;
        font-size: 1.6rem;
        font-weight: 600;
        span {
          color: #8fa7b3;
          font-size: 1.4rem;
          line-height: 2rem;
          margin-left: 3.2rem;
        }
      }

      input,
      textarea {
        width: 100%;
        background: #f5f8fa;
        border: 0.1rem solid #d3e2e5;
        border-radius: 2rem;
        outline: none;
        color: #5c8599;
        font-family: inherit;
      }

      input {
        height: 6.4rem;
        padding: 0 1.6rem;
      }

      textarea {
        min-height: 12rem;
        max-height: 24rem;
        resize: vertical;
        padding: 1.6rem;
        line-height: 2.8rem;
      }

      .new-image {
        width: 100%;
        height: 6.4rem;
        background: #f5f8fa;
        border: 0.1rem dashed #96d2f0;
        border-radius: 2rem;
        outline: none;
        cursor: pointer;
      }
      .button-select {
        display: grid;
        grid-template-columns: 1fr 1fr;
        button:first-child {
          border-radius: 2rem 0rem 0rem 2rem;
        }
        button:last-child {
          border-radius: 0 2rem 2rem 0;
          border-left: 0;
        }
        button {
          outline: none;
          height: 6.4rem;
          background: #f5f8fa;
          border: 0.1rem solid #d3e2e5;
          color: #5c8599;
          cursor: pointer;
          &.active {
            background: #edfff6;
            border: 0.1rem solid #a1e9c5;
            color: #37c77f;
          }
        }
      }
    }
  }
`;
