import { MutableRefObject } from 'react';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { IModalBlockProps, IModalTemplateFooterConfig } from '@/package/naraka/searchable-container/types';
import ModalWrapper, { IFooterConfig } from '@/package/deva/modal';

export default function ModalBlock(props: IModalBlockProps) {
  const { context, contextApi } = useContainerContext();
  const { modalTemplate, currentModalTeamplate } = context;

  const { onCloseModal, onCreateTaskChain } = props;

  const createFooterDefs = (): IFooterConfig[] | undefined => {
    let p_footerDefs: IModalTemplateFooterConfig[] | undefined = modalTemplate?.[currentModalTeamplate!]?.footerDefs;
    if (!p_footerDefs) {
      return;
    }

    let _footerDefs: IFooterConfig[] = p_footerDefs
      .filter((item: IModalTemplateFooterConfig) => item.onClick)
      .map((item: IModalTemplateFooterConfig): IFooterConfig => {
        return {
          ...item,
          onClick: (contentRef?: MutableRefObject<any>, context?: any) => {
            item.onClick!(contentRef, context, onCloseModal, onCreateTaskChain, context, contextApi);
          }
        }
      });

    return _footerDefs;
  }

  return (
    <ModalWrapper
      {...modalTemplate?.[currentModalTeamplate!]}
      open={currentModalTeamplate !== undefined}
      onClose={() => { onCloseModal() }}
      footerDefs={createFooterDefs()}
    ></ModalWrapper>
  );
}
