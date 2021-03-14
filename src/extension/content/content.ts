import { targetNodeSelector } from './constants';
import handleInitFailure from './handleInitFailure';
import handleInitSuccess from './handleInitSuccess';

const targetNode = document.querySelector<HTMLElement>(targetNodeSelector);

targetNode ? handleInitSuccess(targetNode) : handleInitFailure();
