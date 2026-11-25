---
id: 2026-11-26-glossary-optical-inter-satellite-link
title: "[인프라 용어사전] 위성 간 광통신 (OISL) - 우주 데이터센터를 잇는 진공 속 레이저 인터커넥트"
date: 2026-11-26
time: "05:42"
category: Terminology
status: published
summary: "핵심 키워드: 자유공간 광통신(FSO) · 1,550nm 레이저 · 정밀 지향/포착/추적(PAT) · 저궤도 메시 토폴로지 위성 간 광통신(Optical Inter-Satellite Link, OISL) 은 우주 궤도상에 배치된 위성들이 지상 기지국을 거치지 않고, 진공 상태에서 레이저 빔을 직접 주고받으며 대용량 데이터를 전송하는 무선 광 인터커넥트 기술"
labels:
  - 인프라용어사전
  - IT백과사전
  - 위성간광통신
  - OISL
  - 네트워킹
  - 데이터센터
---

<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; line-height: 1.8; color: #1E293B; max-width: 820px; margin: 0 auto;'>
  <div style='background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px 24px; margin-bottom: 28px;'>
    <p style='margin: 0; font-size: 15px; color: #475569;'><strong style='color: #0F172A;'>핵심 키워드:</strong> 자유공간 광통신(FSO) · 1,550nm 레이저 · 정밀 지향/포착/추적(PAT) · 저궤도 메시 토폴로지</p>
  </div>

  <h2 style='border-left: 4px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 32px; margin-bottom: 14px;'>📌 1. 30초 핵심 요약 &amp; 개념 정의</h2>
  <p><strong>위성 간 광통신(Optical Inter-Satellite Link, OISL)</strong>은 우주 궤도상에 배치된 위성들이 지상 기지국을 거치지 않고, 진공 상태에서 레이저 빔을 직접 주고받으며 대용량 데이터를 전송하는 무선 광 인터커넥트 기술입니다.</p>
  <blockquote style='background: #EFF6FF; border-left: 4px solid #3B82F6; margin: 16px 0; padding: 14px 18px; border-radius: 0 8px 8px 0; color: #1E3A8A;'>
    <strong>비유로 이해하기:</strong> 지상 데이터센터의 서버 랙(Rack)들을 수십만 가닥의 광케이블로 묶어 하나의 거대한 클러스터로 만드는 것처럼, OISL은 우주 공간에 떠 있는 개별 위성 노드들을 <strong>보이지 않는 레이저 광섬유</strong>로 연결해 하나의 거대한 우주 스위치 패브릭으로 엮어주는 기술입니다.
  </blockquote>
  <p>지상 통신망이 유리 매질인 광섬유 내부를 통해 빛을 전달한다면, OISL은 대기와 구름의 방해가 없는 고궤도·저궤도 진공 환경에서 자유공간 광통신(Free-Space Optics, FSO) 방식으로 동작합니다. 주파수 할당 규제를 받는 기존 전파(RF) 통신과 달리 초광대역폭을 확보할 수 있어, 수천~수십만 기의 위성이 분산 연산을 수행할 때 필수적인 백본 네트워크 역할을 담당합니다.</p>

  <h2 style='border-left: 4px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 32px; margin-bottom: 14px;'>⚙️ 2. 작동 원리 &amp; 메커니즘</h2>
  <p>OISL 터미널이 궤도상에서 초속 7km 이상으로 이동하는 다른 위성과 수백~수천 km 거리에서 안정적으로 링크를 유지하려면 크게 세 가지 공학적 메커니즘이 정밀하게 맞물려야 합니다.</p>
  <ul style='padding-left: 20px; margin: 12px 0;'>
    <li style='margin-bottom: 8px;'><strong>적외선 레이저 변조 및 광증폭:</strong> 지상 광트랜시버와 유사하게 주로 1,550nm 대역의 적외선 레이저를 사용합니다. 전기 신호를 광신호로 변조한 뒤, 어븀 첨가 광섬유 증폭기(EDFA) 등을 거쳐 고출력 빔으로 송출합니다.</li>
    <li style='margin-bottom: 8px;'><strong>PAT(Pointing, Acquisition, and Tracking) 제어:</strong> 좁은 빔폭을 가진 레이저를 상대 위성의 수광부 렌즈에 정확히 맞추기 위해, 정밀 짐벌(Gimbal)과 고속 스티어링 미러(FSM)를 이용해 실시간으로 각도와 도플러 편이, 궤도 진동을 보정합니다.</li>
    <li style='margin-bottom: 8px;'><strong>우주 메시 라우팅(Space Mesh Routing):</strong> 각 위성은 통상 전후좌우 4방향 이상의 OISL 터미널을 탑재합니다. 이를 통해 지상 게이트웨이의 시야(Line-of-Sight)를 벗어난 상태에서도 인접 위성 간 다중 홉(Multi-hop) 라우팅으로 데이터를 목적지까지 직접 전달합니다.</li>
  </ul>
  <p>특히 진공 상태의 빛은 지상 광섬유(유리 매질 굴절률 약 1.47) 내부보다 약 47% 빠르게 전파되므로, 장거리 대륙 간 통신이나 분산 AI 연산 동기화 시 지연 시간(Latency) 측면에서 구조적 이점을 가집니다.</p>

  <h3 style='color: #1E293B; font-size: 16px; margin-top: 22px; margin-bottom: 10px;'>📊 전송 매체별 아키텍처 비교 분석</h3>
  <div style='overflow-x: auto; margin: 14px 0 24px 0;'>
    <table style='width: 100%; border-collapse: collapse; font-size: 14px; text-align: left; border: 1px solid #CBD5E1;'>
      <thead>
        <tr style='background: #F1F5F9; color: #0F172A;'>
          <th style='padding: 12px; border: 1px solid #CBD5E1;'>구분 항목</th>
          <th style='padding: 12px; border: 1px solid #CBD5E1;'>기존 위성 RF 링크 (Ka/Ku 밴드)</th>
          <th style='padding: 12px; border: 1px solid #CBD5E1;'>지상 광섬유 케이블</th>
          <th style='padding: 12px; border: 1px solid #CBD5E1; background: #EFF6FF; color: #1D4ED8;'>위성 간 광통신 (OISL)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600;'>전송 매질 및 대역</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>전파 (수십 GHz 대역)</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>유리 광섬유 (1,310/1,550nm)</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; background: #F8FAFC;'>진공 자유공간 (1,550nm 레이저)</td>
        </tr>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600;'>전파 속도</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>진공 광속과 동일</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>광속의 약 68% 수준</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; background: #F8FAFC;'>진공 광속과 동일 (최저 지연)</td>
        </tr>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600;'>링크당 대역폭</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>수 Gbps 수준</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>수백 Gbps ~ 수십 Tbps</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; background: #F8FAFC;'>100Gbps ~ 수백 Gbps급 상용화</td>
        </tr>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600;'>보안 및 간섭</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>빔 확산으로 도청·전파방해 취약</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>물리적 매설로 높은 보안성</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; background: #F8FAFC;'>극도로 좁은 빔폭으로 감청 곤란</td>
        </tr>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600;'>주파수 인허가</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>ITU 및 각국 규제 기관 할당 필수</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>주파수 할당 불필요 (토지 인허가)</td>
          <td style='padding: 10px 12px; border: 1px solid #CBD5E1; background: #F8FAFC;'>주파수 간섭 규제에서 자유로움</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style='border-left: 4px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 32px; margin-bottom: 14px;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  <p>오늘 미국 연방통신위원회(FCC)는 스페이스X가 신청한 궤도 데이터센터 시스템 <strong>'스타마인드(Starmind)'</strong>의 군집 위성 100만 기 발사 및 운용을 사상 최초로 최종 승인했습니다. 이처럼 100만 기에 달하는 위성들이 지상 전력망과 토지 병목을 피해 우주에서 AI 연산 거점으로 동작하려면, 개별 위성에 탑재된 컴퓨팅 노드가 고립되지 않고 실시간으로 데이터를 교환할 수 있는 초고속 인터커넥트가 필수적입니다.</p>
  <p>스페이스X가 스페이스X와 xAI 합병 시너지를 기반으로 추진하는 우주 데이터센터 구상에서는 수십만 개의 위성 노드가 OISL 레이저 메시를 통해 상호 연결되어 분산 추론 및 데이터 동기화를 처리하는 구조가 핵심으로 꼽힙니다. 한편 구글 역시 블루오리진과 손잡고 궤도 AI 컴퓨팅 테스트를 추진하고 있으며, 아마존은 아리안 6호 로켓을 투입해 자체 위성망 상용화를 서두르고 있고 인도 릴라이언스도 1,600기 규모 위성망 구축에 나서는 등, 우주 기반 컴퓨팅 및 광역 위성 백본 경쟁이 본격화되고 있습니다.</p>

  <h2 style='border-left: 4px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 32px; margin-bottom: 14px;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
  <div style='background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px 22px; margin: 14px 0;'>
    <p style='margin-top: 0;'><strong>기술적 강점:</strong> RF 스펙트럼 고갈 문제에서 자유로우며, 안테나 크기와 탑재 중량을 줄이면서도 링크당 100Gbps 이상의 대역폭을 구현할 수 있습니다. 빔 확산 각도가 매우 좁아 군사·금융·국가 안보 워크로드에서 요구하는 물리 계층 보안성도 뛰어납니다.</p>
    <p style='margin-bottom: 0;'><strong>아키텍처 및 운영 제약:</strong> 우주와 지상 간 다운링크(Space-to-Ground) 구간에서는 구름, 강우, 대기 난류로 인한 광 감쇠가 발생하므로 하이브리드 RF 백업이나 다중 지상 광학 기지국(OGS) 분산 배치가 필요합니다. 또한 대규모 군집 위성 환경에서는 위성 간 상대 위치가 매 순간 변하는 동적 토폴로지(Dynamic Topology) 특성상, 링크 재수립 시간(Acquisition Time)을 밀리초 단위로 단축하고 라우팅 테이블 재계산 오버헤드를 제어하는 소프트웨어 정의 네트워킹(SDN) 역량이 TCO와 서비스 품질을 좌우합니다.</p>
  </div>

  <h2 style='border-left: 4px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 32px; margin-bottom: 14px;'>💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  <blockquote style='background: #FEFCE8; border-left: 4px solid #EAB308; margin: 14px 0; padding: 14px 18px; border-radius: 0 8px 8px 0; color: #713F12;'>
    미래의 글로벌 백본 엔지니어링은 해저 광케이블의 물리적 경로뿐만 아니라, 궤도 위성들이 진공 속에서 엮어내는 동적 레이저 메시(OISL)의 홉 지연과 재라우팅 안정성까지 함께 설계하는 영역으로 확장되고 있습니다.
  </blockquote>

  <h2 style='border-left: 4px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 32px; margin-bottom: 14px;'>🔗 6. 오늘자 관련 뉴스 원문 링크</h2>
  <ul style='padding-left: 20px; margin: 12px 0;'>
    <li style='margin-bottom: 8px;'><a href='https://n.news.naver.com/mnews/article/001/0016463993' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>美FCC, 스페이스X '우주 데이터센터' 위성 100만기 배치 승인</a> - 연합뉴스</li>
    <li style='margin-bottom: 8px;'><a href='https://news.google.com/rss/articles/CBMixAFBVV95cUxNVk5uRnprd285MEw5V2prcHR6bXljVGN4cUZuOHA4eHJUZkFzOVFnS1QtYnZaal8yYUYxa0t1cW84WjVzQWpub0czSGxUblh3STB6WnZxcThWZUxNRDk2emliZ0tfTmk5U3YxY3FZRXdEYWNyb2VMTmlkZE5RNWZHOS12OWdjSkpNdzhGU0Z4NWo3VmpSZHNXWGNJZUFpZjl2T2xuUkRKRXBpOTFqVFdFLXFvV0xHd1czWDFKbFU3OWFGU21B?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>US authorizes SpaceX to deploy 1 million satellites for data centers in space</a> - Reuters</li>
  </ul>

<div class='infraops-series-crosslinks' style='margin-top: 44px; padding: 20px 24px; background-color: #F8FAFC; border: 1px solid #CBD5E1; border-top: 3px solid #0284C7; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;'><div style='font-size: 13.5px; font-weight: 800; color: #0F172A; letter-spacing: 0.2px; margin-bottom: 12px;'>📚 오늘 함께 발행된 InfraOps 인텔리전스 시리즈 (2026.11.26)</div><table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: #FFFFFF; border: 1px solid #E2E8F0; border-collapse: collapse;'><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #EDE9FE; color: #6D28D9; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🎧 PODCAST</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-26-10min-tech-podcast' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>Orbital Compute Approval, 52GW Power Demand, and Staged Hyperscale Capital <span style='color: #6D28D9; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #E0F2FE; color: #0369A1; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📰 BRIEFING</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-26-daily-infraops-briefing' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>글로벌 인프라 브리핑: 스페이스X 궤도 데이터센터 100만 기 승인 &amp; 52GW 전력난 속 빅테크 자체 발전·소프트웨어 해자 전략 <span style='color: #0369A1; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #CCFBF1; color: #0F766E; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🔬 DEEP DIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-26-deepdive-spacex-orbital-ai-datacenter-architecture' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>미 FCC의 스페이스X 궤도 데이터센터 위성 100만 기 승인과 우주 기반 AI 컴퓨팅 아키텍처 <span style='color: #0F766E; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px;  white-space: nowrap;'><span style='background-color: #F1F5F9; color: #334155; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📧 FULL ARCHIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px;  font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-26-dc-infraops-trends-report' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>DC InfraOps Trends (2026년 11월 26일) — 국내외 전체 기사 아카이브 <span style='color: #334155; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr></table></div>
</div>