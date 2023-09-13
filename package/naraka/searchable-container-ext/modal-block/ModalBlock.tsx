import { MutableRefObject } from 'react';
import { useContainerContext } from '@/package/naraka/searchable-container';
import {
  IModalBlockProps,
  IModalTemplateFooterConfig,
  IModalTemplateValue,
  ContextHookValue,
  IModalTemplateFuncParam,
} from '@/package/naraka/searchable-container/types';
import ModalWrapper, { IFooterConfig } from '@/package/deva/modal';

export default function ModalBlock(props: IModalBlockProps) {
  const { context, contextApi }: ContextHookValue =
    useContainerContext();
  const { modalTemplate, currentModalTeamplate } = context;

  const { onCloseModal, onCreateTaskChain } = props;

  const getModalTemplate = (): IModalTemplateValue => {
    if (typeof modalTemplate === 'function') {
      let param: IModalTemplateFuncParam = { onCreateTaskChain };
      let all: Record<string, IModalTemplateValue> =
        modalTemplate(param);

      return all[currentModalTeamplate];
    } else if (typeof modalTemplate === 'object') {
      return modalTemplate[currentModalTeamplate];
    } else {
      return {};
    }
  };

  const createFooterDefs = (): IFooterConfig[] | undefined => {
    let p_footerDefs: IModalTemplateFooterConfig[] | undefined =
      getModalTemplate()?.footerDefs;
    if (!p_footerDefs) {
      return;
    }

    let _footerDefs: IFooterConfig[] = p_footerDefs
      .filter((item: IModalTemplateFooterConfig) => item.onClick)
      .map((item: IModalTemplateFooterConfig): IFooterConfig => {
        return {
          ...item,
          onClick: (
            contentRef?: MutableRefObject<any>,
            externalContext?: any
          ) => {
            item.onClick!(
              contentRef,
              externalContext,
              onCloseModal,
              onCreateTaskChain,
              context,
              contextApi
            );
          },
        };
      });

    return _footerDefs;
  };

  return (
    <ModalWrapper
      {...getModalTemplate()}
      open={currentModalTeamplate !== undefined}
      onClose={() => {
        onCloseModal();
      }}
      footerDefs={createFooterDefs()}
    ></ModalWrapper>
  );
}
