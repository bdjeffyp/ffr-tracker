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
 * Converts a coordinate into a string with a negative value for the background position CSS property.
 * Checks if a zero value is passed in and returns "0px", to avoid trying to use "-0".
 * @param coordinate x or y position the desired image is located at in the underlying graphics file
 */
export const formatBackgroundPosition = (coordinate: number): string => {
  return coordinate === 0 ? "0px" : "-" + coordinate + "px";
}

/**
 * Finds the x or y position of the top-left of an object to place in the center of a container.
 * Note that this can be used to center to the width or the height of a container. Use for both in separate calls
 * to center the object on both the x and y axes.
 * @param containerWidth Width (or height) of the container that the object resides within
 * @param objectWidth Width (or height) of the object itself
 */
export const centerObject = (containerWidth: number, objectWidth: number): number => {
  return (containerWidth / 2) - (objectWidth / 2);
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
