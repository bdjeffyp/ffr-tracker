import { ISettingsState } from "./models";

/**
 * Combines all style objects into one for placing in an element style attribute.
 * @param args one or more style objects to merge
 */
export const mergeStyles = (...args: (React.CSSProperties)[]): React.CSSProperties => {
  const finalStyle: React.CSSProperties = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      Object.assign(finalStyle, args[i]);
    }
  }

  return finalStyle;
}

/**
 * Retrieve the saved cookie from the browser
 * @param cookieName name of the cookie value to retrieve
 */
export const getCookie = (cookieName: string): string | undefined => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + cookieName + "=");
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
}

/**
 * Gets the Settings cookie and applies it to our Settings component
 */
export const applyCookie = () => {
  // Reads the user's cookie and returns it as a settings object
  const cookie = getCookie('settings');
  const savedSettings = (typeof (cookie) !== 'undefined') ? JSON.parse(cookie) as ISettingsState : undefined;

  // Applies each setting from the cookie to the settings options, using the default "checked" state in the rendered object if a setting is not found
  if (savedSettings) {
    // TODO: Update the settings
  }
  // $.each(savedSettings, function (k, v) {
  //   $('input:radio[name=' + k + ']:nth(' + v + ')').attr('checked', true);
  // });

  // settings.apply(true);
}
