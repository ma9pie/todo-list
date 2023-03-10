import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import Modal from "@/components/shared/modals";
import Alert from "@/components/shared/modals/Alert";
import BottomSheet from "@/components/shared/modals/BottomSheet";
import Confirm from "@/components/shared/modals/Confirm";
import ToastPopup from "@/components/shared/modals/ToastPopup";
const modalUtils = {
  propsMap: new Map(),

  // node 추가
  appendNode: (Component: any, data: any, id: string) => {
    const { key } = data;
    const props = { isOpen: true, unmount: () => {}, onRequestClose: () => {} };
    const container = document.getElementById(id);
    if (!container) return;
    const node = document.createElement("div");
    const root = ReactDOM.createRoot(node);
    container.append(node);

    props.unmount = () => {
      root.unmount();
      node.remove();
    };
    props.onRequestClose = () => {
      props.isOpen = false;
      root.render(<Component {...props} {...data}></Component>);

      setTimeout(() => {
        props.unmount();
        if (key) {
          modalUtils.propsMap.delete(key);
        }
      }, 200);
    };

    props.isOpen = true;
    root.render(<Component {...props} {...data}></Component>);

    if (key) {
      node.id = key;
      modalUtils.propsMap.set(key, props);
    }
  },

  // close
  close: (key: string) => {
    const node = document.getElementById(key);
    if (node) {
      modalUtils.propsMap.get(key).onRequestClose();
    }
  },

  // remove childNode
  removeChildNodes: (key: string) => {
    const node: any = document.getElementById(key);
    if (node) node.innerHTML = "";
  },

  // modal
  openModal: (data: any) => {
    modalUtils.appendNode(Modal, data, "modal");
  },

  // alert
  openAlert: (data: any) => {
    modalUtils.appendNode(Alert, data, "alert-modal");
  },

  // confirm
  openConfirm: (data: any) => {
    modalUtils.appendNode(Confirm, data, "confirm-modal");
  },

  // bottom-sheet
  openBottomSheet: (data: any) => {
    modalUtils.appendNode(BottomSheet, data, "bottom-sheet");
  },

  // toast-popup
  openToastPopup: (data: any) => {
    modalUtils.removeChildNodes("toast-popup");
    modalUtils.appendNode(ToastPopup, data, "toast-popup");
  },
};

export default modalUtils;
