import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  color: ${props => props.theme.colors.text};

  .background  {
    width: 60%;
    margin-top: 1rem;
  }

  .container-profile {
    padding: 2.5rem;
    background: ${props => props.theme.colors.background_light};
    width: 100%;
    height: 400px;
    border-radius: 12px; 
    display: flex;
  }

  .image-profile img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100px;
  }

  .info-profile {
    display: flex; 
    flex-direction: column; 
    width: 100%; 
    margin-left: 2rem;
  }

  .personal-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
  }

  .personal-info .name {
    padding-bottom: 1rem
  }

  .personal-info .fullname {
    padding-bottom: 0.5rem
  }

  .personal-info .username {
    color: ${props => props.theme.colors.text_light};
  }

  .bio span {
    color: ${props => props.theme.colors.textlue};
  }

  .joined {
    font-size: 12px;
  }

  .container-repositories .repositories {
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.colors.background};
    
    padding: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 12px; 
  }

  .professional-info {
    display: flex;
    justify-content: space-between;
  }

  .professional-info span {
    font-size: 14px;
    margin-left: 0.5rem;
  }

  .professional {
    display: flex;
    align-items: center;
  }

  .professional.company,
  .professional.website {
    margin-top: 0.8rem;
  }

  @media only screen and (max-width: 768px) {
    .container-profile {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: auto;
    }
    
    .info-profile {
      margin-left: 0;
      margin-top: 1.5rem;
    }
    
    .personal-info {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .personal-info .name {
      text-align: center;
    }
    
    .professional-info span {
      font-size: 12px;
    }
    
    .bio {
      text-align: center;
      margin-top: 1rem;
    }
  }

  @media only screen and (max-width: 475px) { 
    .background {
      width: 100%;
    }
  }
`;