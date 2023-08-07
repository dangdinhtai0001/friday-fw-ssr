import * as React from 'react';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { IModalBlockProps } from '@/package/naraka/searchable-container/types';
import ModalWrapper, { } from '@/package/deva/modal';

export default function ModalBlock(props: IModalBlockProps) {
  const { context, contextApi } = useContainerContext();
  const { modalTemplate, currentModalTeamplate } = context;

  const { onCloseModal } = props;

  return (
    <ModalWrapper
      {...modalTemplate?.[currentModalTeamplate!]}
      open={currentModalTeamplate !== undefined}
      onClose={() => { contextApi.commitCurrentModalTemplate() }}
    ></ModalWrapper>
  );
}
