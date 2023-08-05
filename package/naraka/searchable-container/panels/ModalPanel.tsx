import * as React from 'react';
import { IModalPanelProps, ContextHookValue, IModalBlockProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import ModalWrapper, { } from '@/package/deva/modal';

export default function ModalPanel(props: IModalPanelProps) {
  const { context, contextApi }: ContextHookValue = useContainerContext();

  const { modalTemplate, currentModalTeamplate } = context;

  return (
    <>
      Modal panel
      <ModalWrapper
        {...modalTemplate?.[currentModalTeamplate!]}
        open={currentModalTeamplate !== undefined}
        onClose={() => { contextApi.commitCurrentModalTemplate() }}
        context={{
          context: context,
          contextApi: contextApi
        } as IModalBlockProps}
      ></ModalWrapper>
    </>
  );
}
