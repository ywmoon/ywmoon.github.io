---
id: 2026-11-03-glossary-data-center-interconnect
title: "[인프라 용어사전] DCI (Data Center Interconnect) - 분산된 AI 데이터센터를 단일 가상 클러스터로 묶는 초광대역 백본 기술"
date: 2026-11-03
time: "06:57"
category: Terminology
status: published
summary: "개념 정의 DCI(Data Center Interconnect, 데이터센터 상호연결) 는 물리적으로 분리된 둘 이상의 데이터센터를 초고속 광전송망(Optical Transport Network)과 고성능 라우팅 프로토콜을 결합하여 단일 논리적 자원 풀로 연동하는 전용 고대역폭 백본 기술입니다. 단순히 지점 간 통신 회선을 연결하는 수준을 넘어, 수십 테라비"
labels:
  - 인프라용어사전
  - IT백과사전
  - DCI
  - 네트워킹
  - 데이터센터
---

<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; line-height: 1.8; color: #1E293B;'>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>📌 1. 30초 핵심 요약 &amp; 개념 정의</h2>
  <div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px 20px; margin: 16px 0;'>
    <p style='margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #2563EB;'>개념 정의</p>
    <p style='margin: 0; font-size: 14px; color: #334155;'>
      <strong>DCI(Data Center Interconnect, 데이터센터 상호연결)</strong>는 물리적으로 분리된 둘 이상의 데이터센터를 초고속 광전송망(Optical Transport Network)과 고성능 라우팅 프로토콜을 결합하여 단일 논리적 자원 풀로 연동하는 전용 고대역폭 백본 기술입니다. 단순히 지점 간 통신 회선을 연결하는 수준을 넘어, 수십 테라비트(Tbps) 이상의 트래픽을 극저지연 및 무손실 환경에서 전송함으로써 분산된 컴퓨팅 클러스터가 마치 하나의 건물 안에 상주하는 것처럼 작동하도록 보장합니다.
    </p>
  </div>
  <p style='font-size: 14px; color: #475569; margin: 12px 0;'>
    직관적으로 비유하자면, DCI는 멀리 떨어진 두 독립 도시 사이에 신호등이나 병목 정체가 전혀 없는 <strong>'초고속 자기부상 직통 전용선'</strong>을 부설하는 것과 같습니다. 수천 대의 분산 서버가 메모리와 스토리지 블록 데이터를 교환할 때, 일반 인터넷 공용망의 예측 불가능한 지연을 배제하고 확정적(Deterministic) 전송 속도를 제공합니다.
  </p>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>⚙️ 2. 작동 원리 &amp; 메커니즘</h2>
  <p style='font-size: 14px; color: #334155;'>
    DCI 아키텍처는 광전송을 담당하는 물리 계층(L1)부터 프로토콜을 제어하는 오버레이 네트워크 계층(L2/L3), 그리고 데이터 암호화를 수행하는 보안 계층이 유기적으로 맞물려 작동합니다.
  </p>

  <h3 style='font-size: 16px; font-weight: 600; color: #1E293B; margin-top: 20px; margin-bottom: 10px;'>1) 코히런트 광전송과 파장분할다중화(DWDM)</h3>
  <p style='font-size: 14px; color: #475569;'>
    대규모 연산 데이터 전송을 위해 단일 광섬유 페어(Fiber Pair)에 서로 다른 파장의 빛 신호를 동시에 전송하는 DWDM(고밀도 파장 분할 다중화) 기술이 핵심 축을 이룹니다. 최근 DCI는 별도의 부피가 큰 광전송 트랜스폰더 섀시 대신 스위치 및 라우터에 직접 장착 가능한 400G 및 800G ZR/ZR+ 규격의 코히런트(Coherent) 플러그형 광트랜시버를 채택하여 전력 소모와 상면 비용을 50% 이상 절감합니다. 디지털 신호 처리기(DSP)가 색분산(Chromatic Dispersion)과 위상 왜곡을 실시간으로 보정하여 수십~수백 킬로미터 거리에서도 무손실 전송을 달성합니다.
  </p>

  <h3 style='font-size: 16px; font-weight: 600; color: #1E293B; margin-top: 20px; margin-bottom: 10px;'>2) EVPN-VXLAN 및 SRv6 기반의 오버레이 패브릭</h3>
  <p style='font-size: 14px; color: #475569;'>
    원거리 데이터센터 간 통신 시 레이어 2(L2) 브로드캐스트 도메인을 안전하게 확장하기 위해 EVPN-VXLAN(이더넷 VPN 가상 확장 LAN) 또는 SRv6(세그먼트 라우팅 IPv6)가 적용됩니다. 이를 통해 서로 다른 건물에 위치한 가상머신(VM)이나 컨테이너 파드(Pod)가 동일한 IP 대역과 서브넷을 유지할 수 있어, 네트워크 단절 없는 라이브 마이그레이션(Live Migration)과 분산 스토리지 동기화가 가능해집니다.
  </p>

  <h3 style='font-size: 16px; font-weight: 600; color: #1E293B; margin-top: 20px; margin-bottom: 10px;'>3) 회선 레벨 하드웨어 암호화 (Line-Rate MACsec)</h3>
  <p style='font-size: 14px; color: #475569;'>
    공공 도로를 통과하는 장거리 광케이블의 특성상 도청과 데이터 탈취 위협을 차단해야 합니다. 소프트웨어 스택 기반의 IPsec 터널링은 패킷 캡슐화에 따른 마이크로초(μs) 단위의 레이턴시 오버헤드를 유발하므로, DCI 스위치 하드웨어 ASIC 레벨에서 패킷 처리 속도 저하 없이 802.1AE MACsec 암호화를 전송 속도 그대로(Line-Rate) 수행하여 지연시간을 수십 나노초(ns) 수준으로 억제합니다.
  </p>

  <div style='overflow-x: auto; margin: 24px 0;'>
    <table style='width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;'>
      <thead>
        <tr style='background-color: #F1F5F9; border-bottom: 2px solid #CBD5E1;'>
          <th style='padding: 12px; font-weight: 600; color: #0F172A; text-align: center;'>구분</th>
          <th style='padding: 12px; font-weight: 600; color: #0F172A; text-align: center;'>메트로 DCI (Metro DCI)</th>
          <th style='padding: 12px; font-weight: 600; color: #0F172A; text-align: center;'>장거리 DCI (Long-Haul DCI)</th>
          <th style='padding: 12px; font-weight: 600; color: #0F172A; text-align: center;'>퍼블릭 인터넷 VPN</th>
        </tr>
      </thead>
      <tbody>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px; font-weight: 600; background-color: #FAFAFA; text-align: center;'>연결 거리</td>
          <td style='padding: 12px; text-align: center;'>10km ~ 80km 이내</td>
          <td style='padding: 12px; text-align: center;'>100km ~ 수천 km</td>
          <td style='padding: 12px; text-align: center;'>거리 무관 (공용 인터넷 망)</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px; font-weight: 600; background-color: #FAFAFA; text-align: center;'>전송 계층 기술</td>
          <td style='padding: 12px;'>다이렉트 DWDM / 400G·800G ZR</td>
          <td style='padding: 12px;'>광증폭기(EDFA/Raman) + ZR+ Coherent</td>
          <td style='padding: 12px;'>IP 계층 터널링 (IPsec, WireGuard)</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px; font-weight: 600; background-color: #FAFAFA; text-align: center;'>왕복 지연시간 (RTT)</td>
          <td style='padding: 12px; text-align: center;'>1ms ~ 2ms 이하</td>
          <td style='padding: 12px; text-align: center;'>10ms ~ 50ms 이상</td>
          <td style='padding: 12px; text-align: center;'>30ms ~ 150ms+ (지터 불규칙)</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px; font-weight: 600; background-color: #FAFAFA; text-align: center;'>처리 대역폭</td>
          <td style='padding: 12px; text-align: center;'>수십 Tbps ~ 100Tbps+</td>
          <td style='padding: 12px; text-align: center;'>수 Tbps ~ 수십 Tbps</td>
          <td style='padding: 12px; text-align: center;'>수백 Mbps ~ 수 Gbps 한계</td>
        </tr>
        <tr>
          <td style='padding: 12px; font-weight: 600; background-color: #FAFAFA; text-align: center;'>주요 활용 영역</td>
          <td style='padding: 12px;'>분산 AI 연산 노드 동기화, 실시간 DB 미러링</td>
          <td style='padding: 12px;'>대륙 간 리전 백본 연동, 재해 복구(DR)</td>
          <td style='padding: 12px;'>원격 지사 접속, 테스트 환경 구축</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  <p style='font-size: 14px; color: #334155;'>
    오늘 발표된 글로벌 통신사 루멘(Lumen)과 마이크로소프트의 대규모 협력 확대는 엔터프라이즈 AI 워크로드가 급증하는 국면에서 DCI 아키텍처의 전략적 가치를 명확히 보여줍니다. 최근 하이퍼스케일러들은 단일 데이터센터 부지에 수만 대의 고전력 가속기를 모두 밀집시키는 방식이 전력 계통 용량 한계에 봉착하자, 대도시 인근의 여러 거점 센터로 연산 노드를 물리적으로 분산 배치하고 있습니다.
  </p>
  <p style='font-size: 14px; color: #475569;'>
    마이크로소프트는 루멘의 초광대역 사설 광섬유망(Private Fiber)과 메트로 DCI 패브릭을 애저(Azure) 클라우드 리전 및 기업 고객 데이터센터와 직접 연결하는 'AI-Ready 네트워크'를 공동 판매하기로 발표했습니다. 이를 통해 분산된 수천 개의 연산 클러스터가 1밀리초대의 초저지연 광경로를 통해 단일 슈퍼컴퓨터처럼 통신할 수 있는 기간 인프라를 확보했습니다.
  </p>
  <p style='font-size: 14px; color: #475569;'>
    국내에서도 삼성SDS가 구미에 120MW급 대규모 AI 데이터센터를 착공하고 엔비디아 기반 클라우드 서비스를 강화함에 따라, 수도권 클라우드 거점과 영남권 거점 간에 대규모 가중치 체크포인트를 초고속으로 전송할 전용 광전송 DCI 구축이 인프라 확장의 핵심 선결 과제로 병행 추진되고 있습니다.
  </p>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
  <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0;'>
    <div style='background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 16px;'>
      <p style='margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #166534;'>주요 기술적 이점</p>
      <ul style='margin: 0; padding-left: 18px; font-size: 13px; color: #14532D; line-height: 1.7;'>
        <li><strong>컴퓨팅 자원 사일로 해소</strong>: 지리적으로 분산된 서버와 스토리지를 하나의 패브릭으로 묶어 가동률 극대화</li>
        <li><strong>확정적 극저지연</strong>: 광선로 직결을 통해 인터넷 트래픽 정체 및 패킷 지터 원천 제거</li>
        <li><strong>하드웨어 가속 보안</strong>: 회선 대역폭 감소 없이 802.1AE MACsec 기반 엔드투엔드 암호화 보장</li>
      </ul>
    </div>
    <div style='background-color: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 16px;'>
      <p style='margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #991B1B;'>도입 시 제약 및 고려사항</p>
      <ul style='margin: 0; padding-left: 18px; font-size: 13px; color: #7F1D1D; line-height: 1.7;'>
        <li><strong>물리적 광속 한계</strong>: 광섬유 내 신호 전파 지연(약 5μs/km)에 따른 물리적 지연시간은 단축 불가</li>
        <li><strong>높은 고정 회선 비용</strong>: 전용 다크파이버(Dark Fiber) 임차 및 고성능 코히런트 광트랜시버 투자 비용 발생</li>
        <li><strong>광선로 절단 리스크</strong>: 굴착 공사 등으로 인한 단선에 대비해 물리적으로 이원화된 링(Ring) 경로 설계 필수</li>
      </ul>
    </div>
  </div>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  <blockquote style='margin: 16px 0; padding: 14px 18px; background-color: #F8FAFC; border-left: 4px solid #0F172A; font-size: 14px; font-style: italic; color: #334155;'>
    "단일 사이트의 전력과 부지 한계로 AI 데이터센터의 지리적 분산이 불가피해진 시대, DCI는 단순한 통신 회선이 아니라 분산 노드 전체의 연산 효율과 데이터 일관성을 좌우하는 핵심 아키텍처 인프라다."
  </blockquote>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>🔗 6. 오늘자 관련 뉴스 원문 링크</h2>
  <ul style='list-style-type: disc; padding-left: 20px; font-size: 14px; color: #334155; line-height: 2;'>
    <li>
      <a href='https://news.google.com/rss/articles/CBMixAFBVV95cUxOb3FNSGwyLVlBeXJWZHR3MG1sWklORnp0RE0tYW5YM1E4elBvSkQwcXllZllNT2dsN3pUR244anVjSmhFVjVYbTJxUGpiNzhPRkpjS1hQLUk0d2VOcjk0UWRMZ3R1cEo0S1VGbkJFOEZ5VTc0ckxEZW5mZnNoVXgwY2pWSkFFdmlVQjZ2X0RGbEM0VC1VUTIzbG5YRjQtOFRyWHhjNWU0Q3NVUGl3VDN1RUQ2Ni1rRHNacTVhMkVsRTkycTRz?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Lumen and Microsoft expand collaboration to co-sell enterprise AI-ready networks</a> - Microsoft Source
    </li>
    <li>
      <a href='https://www.aitimes.kr/news/articleView.html?idxno=42547' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>삼성SDS, 구미에 120MW급 'AI 데이터센터' 착공...4,273억원 투자해 2028년 말 준공</a> - 인공지능신문
    </li>
    <li>
      <a href='https://news.google.com/rss/articles/CBMiaEFVX3lxTFBpZ3FyTTdoV19iNzQzU19NMURrZklQUE5NVEp6MGd5MHBQeDJiX2VKaG1WN09ZRFVvdlhRczNzZlMwZXZwWVRrXzJ5WTRUcVBkaUIyVXNoLU9ZYUZPQjJQMFowcUZLcXVi?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Anthropic Builds Its Own Data Centers Alongside AWS</a> - Demokratis.co.id
    </li>
  </ul>


<div class='infraops-series-crosslinks' style='margin-top: 44px; padding: 20px 24px; background-color: #F8FAFC; border: 1px solid #CBD5E1; border-top: 3px solid #0284C7; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;'><div style='font-size: 13.5px; font-weight: 800; color: #0F172A; letter-spacing: 0.2px; margin-bottom: 12px;'>📚 오늘 함께 발행된 InfraOps 인텔리전스 시리즈 (2026.11.03)</div><table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: #FFFFFF; border: 1px solid #E2E8F0; border-collapse: collapse;'><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #EDE9FE; color: #6D28D9; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🎧 PODCAST</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-03-10min-tech-podcast' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>Navigating Mega-CapEx Deficits, 800V DC Deployments, and Municipal Grid Moratoriums <span style='color: #6D28D9; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #E0F2FE; color: #0369A1; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📰 BRIEFING</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-03-daily-infraops-briefing' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>글로벌 인프라 브리핑: 빅테크 3조 달러 CapEx와 현금흐름 경고음 속 K-인프라 영토 확장 및 기가와트급 전력망 재편 <span style='color: #0369A1; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #CCFBF1; color: #0F766E; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🔬 DEEP DIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-03-deepdive-samsung-sds-gumi-120mw-aidc-physical-ai' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>수도권 전력 규제 돌파와 &#x27;피지컬 AI&#x27; 거점의 태동: 삼성SDS 구미 120MW AIDC의 인프라 공학과 경제학 <span style='color: #0F766E; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px;  white-space: nowrap;'><span style='background-color: #F1F5F9; color: #334155; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📧 FULL ARCHIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px;  font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-03-dc-infraops-trends-report' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>DC InfraOps Trends (2026년 11월 03일) — 국내외 전체 기사 아카이브 <span style='color: #334155; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr></table></div>
</div>