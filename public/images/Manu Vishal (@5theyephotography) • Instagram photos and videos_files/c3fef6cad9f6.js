__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t={copy:r(d[0]).default,delete:r(d[1]).default,directShare:r(d[2]).default,embed:r(d[3]).default,options:r(d[4]).default,report:r(d[5]).default,share:r(d[6]).default,tagged:r(d[7]).default,unfollow:r(d[8]).default};var o=r(d[10]).withRouter(function({location:o,onClose:l,openModal:u,postId:n}){const f=t[u];return a(d[9]).createElement(f,{location:o,onClose:l,postId:n})});e.default=o},12976128,[12976129,12976130,12976131,12976133,12976134,12976145,12976146,12976147,12976148,3,6]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){const n=r(d[0]).usePost(t,r(d[1]).getCopyUrl);return a(d[2]).createElement(i(d[3]),{onClose:o,postUrl:n})}},12976129,[19923660,19923659,3,19923854]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(3554);e.default=function({location:o,onClose:l,postId:n}){const s=r(d[1]).useDispatch(),c=r(d[1]).useSelector(t=>r(d[2]).getViewer(t));return a(d[9]).createElement(r(d[10]).Dialog,{body:r(d[0])(3400),title:t},a(d[9]).createElement(r(d[10]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{let t;if(null!=o&&r(d[3]).isDesktop()&&i(d[4])._("160","1")){var u;o.pathname!==r(d[5]).FEED_PATH&&(t=o.pathname),(null===(u=t)||void 0===u?void 0:u.startsWith('/p/'))&&(t=r(d[6]).buildUserLink(i(d[7])(null===c||void 0===c?void 0:c.username)))}s(r(d[8]).deletePost(n,t)),l()}},r(d[11]).DELETE_TEXT),a(d[9]).createElement(r(d[10]).DialogItem,{onClick:l},r(d[11]).CANCEL_TEXT))},e.DELETE_POST_PROMPT=t},12976130,[20119612,5,20119888,20119559,20119705,20119764,20119807,20185116,10354761,3,20185131,20119901]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({onClose:t,postId:s}){const n=r(d[1]).useDispatch(),o=i(d[2])(),l=r(d[3]).usePost(s,r(d[4]).getPostType),c='DirectShareSheet';r(d[5]).useEffect(()=>{r(d[6]).startFunnel(),r(d[6]).logFunnelAction(r(d[6]).SHARE_FUNNEL_BUTTON_CLICK),i(d[7])._("280")||r(d[8]).logAction_DEPRECATED('shareClick',{source:o,type:l}),r(d[6]).logFunnelAction(r(d[6]).SHARE_FUNNEL_SHARE_SHEET),n(r(d[9]).loadPostShareIds(s))},[o,n,s,l]);const _=()=>{r(d[6]).endFunnel(),t()},u=r(d[13]).getMqttInstance()&&r(d[14]).hasDirect(),E=!0===i(d[11])._("164","2");return u&&null!=s&&s.length>0&&a(d[5]).createElement(r(d[15]).Modal,{dangerouslySetClassName:{__className:E?"-gEQ-":""},fixedHeight:!0!==E,onClose:_,size:"large"},a(d[5]).createElement(i(d[16]),{backAction:_,forwardAction:(t,l)=>{_();const u=o;i(d[10]).logDirectEvent(c,'share_sheet_send',{referral:u}),null!=l&&''!==l&&!0===i(d[11])._("164","2")?n(r(d[12]).sendPostToUsers(String(s),t,l)):n(r(d[12]).sendPostToUsers(String(s),t))},forwardText:r(d[17]).SEND_BUTTON_STRING,includeGroup:!0,isModal:!0,isShareSheet:!0,pageId:c,title:r(d[17]).SHARE_TITLE}))}},12976131,[12976132,5,10354708,19923660,19923661,3,19923853,20119609,20119644,10354761,20119651,20119705,20120156,20120161,20119704,20185131,10354957,20120106]);
__d(function() {},12976132,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var s=function({onClose:s,postId:o}){const t=i(d[0])(),n=r(d[1]).usePost(o,s=>s.code)||'',u=r(d[1]).usePost(o,r(d[2]).isClipsPost),l=r(d[1]).usePost(o,r(d[2]).isIGTVPost),P=r(d[1]).usePost(o,s=>!!s.isVideo),c=r(d[1]).usePost(o,s=>{var o;return i(d[3])(null===(o=s.owner)||void 0===o?void 0:o.id)});return a(d[4]).createElement(i(d[5]),{analyticsContext:t,code:n,id:o,isClipsPost:u,isGuide:!1,isIGTVPost:l,isVideo:P,onClose:s,ownerId:c})};e.default=s},12976133,[10354708,19923660,20119792,20185116,3,19923835]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){return a(d[0]).createElement(r(d[1]).Dialog,{onModalClose:t},a(d[0]).createElement(i(d[2]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[3]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[4]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[5]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[6]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[7]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[8]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[9]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[10]),{onClose:t,postId:o}),a(d[0]).createElement(r(d[1]).DialogItem,{onClick:t},r(d[11]).CANCEL_TEXT))}},12976134,[3,20185131,12976135,12976137,12976138,12976139,12976140,12976141,12976142,12976143,12976144,20119901]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){const s=r(d[0]).usePost(o,r(d[1]).getPostOwnedByViewer),l=r(d[0]).usePost(o,r(d[2]).getPostType),u=i(d[3])(),c=r(d[0]).usePost(o,r(d[4]).isIGTVPost),n=r(d[5]).useSetPostModal();let P=r(d[6]).isMobile()||c;return r(d[6]).isDesktop()&&!0===i(d[7])._("160","1")&&(P=!0),s&&P?a(d[9]).createElement(r(d[10]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[8]).logAction_DEPRECATED('delete_post_click',{source:u,type:l}),n('delete')}},r(d[11])(2491)):null}},12976135,[19923660,12976136,19923661,10354708,20119792,19923656,20119559,20119705,20119644,3,20185131,20119612]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.getPostOwnedByViewer=function(t){var n;return(null===(n=t.owner)||void 0===n?void 0:n.id)===r(d[0]).getViewerId()}},12976136,[20119557]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const o=r(d[0])(444);e.default=function({onClose:t,postId:n}){const s=r(d[1]).usePost(n,r(d[2]).getPostOwnedByViewer),c=r(d[3]).useSetPostModal();return s?null:a(d[7]).createElement(r(d[8]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[4]).isUserLoggedIn()?c('report'):r(d[5]).redirect(r(d[6]).buildLoginLink(window.location.href,{source:'logged_out_post_report_redirect'}))}},o)}},12976137,[20119612,19923660,12976136,19923656,20119646,20119925,20119807,3,20185131]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(n){return u[n]}function t(n,t){const o=l[n];return r(d[2]).buildLegalReportLink(o,t)}function o(){const n=r(d[3]).getCountryCode();return i(d[4])._("261")?'DE'!==n&&'AT'!==n?null:n:null}Object.defineProperty(e,'__esModule',{value:!0});const u={DE:r(d[0])(779),AT:r(d[0])(3543)},l={DE:r(d[1]).NETZDG_REPORT_CONTACT_FORM_PATH,AT:r(d[1]).CPA_REPORT_CONTACT_FORM_PATH};e.default=function({onClose:u,postId:l}){const c=o();if(r(d[5]).isUserLoggedIn()||null==c)return null;const s=t(c,l),_=n(c);return a(d[7]).createElement(r(d[8]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[6]).redirect(s)}},_)}},12976138,[20119612,20119764,20119807,20119557,20119609,20119646,20119925,3,20185131]);
__d(function(g,r,i,a,m,e,d){"use strict";function o(o,t){const n=r(d[1]).getPostById(o,t),{owner:l}=n;if(!l)return!1;const u=r(d[2]).getRelationship(o.relationships,l.id);return r(d[2]).followedByViewer(u)}Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(1873);e.default=function({postId:n,onClose:l}){const u=r(d[3]).useSelector(t=>o(t,n)),s=r(d[4]).useSetPostModal(),c=r(d[5]).usePost(n,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id}),f=i(d[6])();return u?a(d[8]).createElement(r(d[9]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[7]).logConnectionAction({eventName:'unfollow_button_tapped',containerModule:f,targetId:c}),s('unfollow')}},t):null}},12976139,[20119612,10354771,20119710,5,19923656,19923660,10354708,20120164,3,20185131]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){const n=r(d[0]).useSelector(r(d[1]).selectPageIdentifier),l=r(d[2]).usePost(o,t=>{var o;return!!(null===(o=t.code)||void 0===o?void 0:o.length)})&&n!==i(d[3]).postPage,s=r(d[2]).usePost(o,r(d[4]).getShareURL);return l?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{i(d[5]).push(s)}},r(d[8])(864)):null}},12976140,[5,20119931,19923660,20119761,19923659,20119925,3,20185131,20119612]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:l}){const n=r(d[0]).usePost(l,t=>t.usertags),o=null!=n&&n.length>0,s=r(d[1]).useSetPostModal();return o&&i(d[2])._("248")?a(d[3]).createElement(r(d[4]).DialogItem,{onClick:()=>{s('tagged')}},r(d[5])(3330)):null}},12976141,[19923660,19923656,20119609,3,20185131,20119612]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:n}){const o=r(d[0]).usePostAndOwner(n,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal();return o?a(d[3]).createElement(r(d[4]).DialogItem,{onClick:()=>s('share')},r(d[5])(1053)):null}},12976142,[19923660,19923659,19923656,3,20185131,20119612]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(3189),o=r(d[0])(2740);e.default=function({onClose:s,postId:n}){const c=r(d[1]).usePostAndOwner(n,r(d[2]).getIsShareable),u=r(d[3]).useSetPostModal(),l=i(d[4])(),p=i(d[5])(),P=r(d[1]).usePost(n,r(d[6]).getPostType),y=r(d[1]).usePost(n,r(d[2]).getCopyUrl);return c?a(d[9]).createElement(r(d[10]).DialogItem,{onClick:()=>{if(!r(d[7]).canCopy())return void u('copy');const o=r(d[7]).copy(y);r(d[8]).logAction_DEPRECATED('postLinkCopy',{source:p,type:P}),o?(l({text:t}),s()):u('copy')}},o):null},e.LINK_COPIED_PROMPT=t,e.COPY_LINK_TEXT=o},12976143,[20119612,19923660,19923659,19923656,19923535,10354708,19923661,20120131,20119644,3,20185131]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:o,onClose:t}){const n=r(d[0]).usePostAndOwner(o,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal(),l=i(d[3])(),u=r(d[0]).usePost(o,r(d[4]).getPostType),c=r(d[0]).usePost(o,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id});return n?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{r(d[5]).logAction_DEPRECATED('embedCodeClick',{mediaId:o,ownerId:c,source:l,type:u}),s('embed')}},r(d[8])(897)):null}},12976144,[19923660,19923659,19923656,10354708,19923661,20119644,3,20185131,20119612]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:n,postId:o}){const t=r(d[0]).usePostAndOwner(o,(n,o)=>o.id),s=r(d[0]).usePostAndOwner(o,(n,o)=>o.username),u=r(d[0]).usePostAndOwner(o,(n,o)=>o.profilePictureUrl),l=i(d[1])();return a(d[2]).createElement(i(d[3]),{analyticsContext:l,onClose:n,ownerID:t,ownerProfilePicURL:u,ownerUsername:s,postID:o})}},12976145,[19923660,10354708,3,19923831]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:n}){const s=r(d[0]).useDispatch(),o=i(d[1])(),u=r(d[2]).usePost(n,r(d[3]).getPostType),l=r(d[2]).usePost(n,t=>{var n;const s=(null===(n=t.owner)||void 0===n?void 0:n.username)||'';return r(d[4]).getShareDescription(s,u)}),_=r(d[2]).usePostAndOwner(n,r(d[5]).getIsShareable),c=r(d[2]).usePost(n,t=>t.shareIds),E=r(d[2]).usePost(n,r(d[5]).getShareURL);return r(d[6]).useEffect(()=>{r(d[7]).startFunnel(),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_BUTTON_CLICK),i(d[8])._("280")||r(d[9]).logAction_DEPRECATED('shareClick',{source:o,type:u}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_SHARE_SHEET),s(r(d[10]).loadPostShareIds(n))},[o,s,n,u]),a(d[6]).createElement(i(d[11]),{analyticsContext:o,description:l,onClose:()=>{r(d[7]).endFunnel(),t()},onNativeShare:()=>{i(d[8])._("280")||r(d[9]).logAction_DEPRECATED('nativeShareClick',{source:o,type:u}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_NATIVE),t(),r(d[4]).shareWithNative(l,E,'ig_web_button_native_share').then(r(d[7]).endFunnel)},postId:n,postType:u,shareEnabled:_,shareIds:c,url:E,utmSource:"ig_web_button_share_sheet"})}},12976146,[5,10354708,19923660,19923661,19923662,19923659,3,19923853,20119609,20119644,10354761,19923845]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:s}){const o=r(d[0]).usePost(s,t=>i(d[1])(t.usertags));return a(d[2]).createElement(i(d[3]),{mediaId:s,onClose:t,title:r(d[4])(2963),usertags:o})}},12976147,[19923660,20185116,3,19923728,20119612]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const o=i(d[0])(),s=r(d[1]).usePost(t,t=>{var n;return null===(n=t.owner)||void 0===n?void 0:n.id});return a(d[2]).createElement(i(d[3]),{analyticsContext:o,analyticsExtra:{},onClose:n,userId:s})}},12976148,[10354708,19923660,3,10354721]);