import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks/useAppSelector/useAppSelector';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks/useAppDispatch/useAppDispatch';
import {memo, MouseEvent} from 'react';
import {getFavoriteOffers} from '../../store/offers-process/selectors';
import {getUserInfo} from '../../store/user-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function SiteHeader(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffersCount = useAppSelector(getFavoriteOffers).length;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userInfo = useAppSelector(getUserInfo);
  const isAuthorized = (authorizationStatus === AuthorizationStatus.Auth);

  const handleSignOut = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={isAuthorized ? AppRoute.Favorites : AppRoute.Login} className="header__nav-link header__nav-link--profile" >
                  <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${userInfo?.avatarUrl})`}}>
                  </div>
                  {isAuthorized ?
                    <p style={{margin: 0}}>
                      <span className="header__user-name user__name">{userInfo?.email}</span>
                      <span className="header__favorite-count">{favoriteOffersCount}</span>
                    </p> :
                    <span className="header__user-name user__name">Sign in</span>}
                </Link>
              </li>
              {isAuthorized &&
              <li className="header__nav-item">
                <a href="/" className="header__nav-link" onClick={handleSignOut} data-testid='header-signout'>
                  <span className="header__signout">Sign out</span>
                </a>
              </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default memo(SiteHeader);
