/*
 * velocity-animate (C) 2014-2018 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

// Typedefs
import {VelocityState} from "../../velocity.d";

// Constants
import {CLASSNAME} from "../constants";

const isClient = true, //window && window === window.window,
	windowScrollAnchor = false; //isClient && window.pageYOffset !== undefined;

export const State: VelocityState = {
	isClient,
	isMobile: true, //isClient && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	isGingerbread: false, // isClient && /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
	// prefixElement: isClient && document.createElement("div"),
	windowScrollAnchor,
	scrollAnchor: false, //windowScrollAnchor ? window : (!isClient || document.documentElement || document.body.parentNode || document.body),
	scrollPropertyLeft: windowScrollAnchor ? "pageXOffset" : "scrollLeft",
	scrollPropertyTop: windowScrollAnchor ? "pageYOffset" : "scrollTop",
	className: CLASSNAME,
	isTicking: false,
	first: undefined,
	last: undefined,
	firstNew: undefined,
};
