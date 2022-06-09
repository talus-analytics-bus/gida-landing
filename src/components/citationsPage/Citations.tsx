import React from 'react'
import styled from 'styled-components'

import { Citation } from 'cmsHooks/useCitationsData'
import CMS from '@talus-analytics/library.airtable-cms'

const Container = styled.div`
  margin-top: 30px;
`
const CitationText = styled.p`
  line-height: 26px;
`
const TitleLink = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #303434;

  &:hover {
    text-decoration: underline;
  }
`
const DOILink = styled.a`
  color: #303434;
`
const IconContainer = styled.div<{ color: string }>`
  display: flex;
  margin-top: 10px;

  &:hover > span {
    color: ${({ color }) => color};
  }
`
const ProjectIcon = styled(CMS.Icon)`
  width: 24px;
  height: 24px;
`
const ProjectName = styled.span`
  transition: 150ms;
  color: white;
  padding-left: 0.25em;
`

interface CitationsProps {
  data: Citation[]
}

const Citations = ({ data }: CitationsProps) => (
  <>
    {data.map(citation => (
      <Container key={citation.URL}>
        <CitationText>
          {citation.Authors?.trim()} ({citation.Publication_Year}).{' '}
          <TitleLink href={citation.URL}>
            {citation.Publication_Title?.trim()}.
          </TitleLink>{' '}
          {citation.Publication_?.trim()}
          {citation.DOI && (
            <>
              {', '}
              <DOILink href={citation.DOI}>{citation.DOI.trim()}</DOILink>
            </>
          )}
        </CitationText>
        <IconContainer color={citation.Project[0].data.Key_Color}>
          <ProjectIcon name={citation.Project[0].data.Icon[0].data.Name} />
          <ProjectName>{citation.Project[0].data.Name}</ProjectName>
        </IconContainer>
      </Container>
    ))}
  </>
)

export default Citations
