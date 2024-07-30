import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f1f1f1;

  .inner {
    padding: 1.7rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2.8rem;
      font-weight: 500;
      font-family: Edu AU VIC WA NT Hand, normal, sans-serif;
      color: var(--color-purple);
    }

    input {
      font-size: 1.6rem;
      flex: 1;
      max-width: 75.4rem;
      background-color: var(--color-gray);
      border: none;
      padding: 1.05rem 4.8rem;
      border-radius: 0.8rem;
    }

    .nav-links {
      display: flex;
      gap: 3.2rem;

      .nav-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;
        width: 6rem;

        img {
          flex: 1;
        }

        &:hover {
          background-color: var(--color-blue-light);
        }
      }
    }
  }
`
