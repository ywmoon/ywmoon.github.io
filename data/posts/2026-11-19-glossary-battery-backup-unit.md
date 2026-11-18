---
id: 2026-11-19-glossary-battery-backup-unit
title: "[인프라 용어사전] BBU (배터리 백업 유닛) (Battery Backup Unit) - AI 서버 랙 내부에서 밀리초 단위 전력을 방어하는 랙 레벨 비상 전원 모듈"
date: 2026-11-19
time: "05:43"
category: Terminology
status: published
summary: "BBU(Battery Backup Unit, 배터리 백업 유닛) 는 데이터센터의 별도 전기실이 아닌 IT 서버 랙(Rack) 내부에 직접 장착 되어, 정전이나 순간 전압 강하(Sag) 발생 시 수 밀리초(ms) 이내에 직류(DC) 전력을 서버와 AI 가속기에 공급하는 모듈형 비상 전원 하드웨어입니다. 건물 전체를 지키는 중앙 발전기나 대형 UPS가 도시의 "
labels:
  - 인프라용어사전
  - IT백과사전
  - BBU
  - AI데이터센터
  - 삼성SDI
---

<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; line-height: 1.8; color: #1E293B; max-width: 860px; margin: 0 auto;'>

<h2 style='border-left: 5px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 28px; margin-bottom: 14px;'>📌 1. 30초 핵심 요약 &amp; 개념 정의</h2>
<div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px 20px; margin-bottom: 20px;'>
<p style='margin: 0 0 10px 0;'><strong>BBU(Battery Backup Unit, 배터리 백업 유닛)</strong>는 데이터센터의 별도 전기실이 아닌 <strong>IT 서버 랙(Rack) 내부에 직접 장착</strong>되어, 정전이나 순간 전압 강하(Sag) 발생 시 수 밀리초(ms) 이내에 직류(DC) 전력을 서버와 AI 가속기에 공급하는 모듈형 비상 전원 하드웨어입니다.</p>
<p style='margin: 0;'>건물 전체를 지키는 중앙 발전기나 대형 UPS가 도시의 <strong>광역 변전소</strong>라면, BBU는 서버 바로 옆에 배치되어 급격한 연산 부하 변동과 순간 단전을 즉각 방어하는 <strong>컴퓨터 본체 내부의 초소형 보조 배터리</strong>에 해당합니다. 특히 AI 학습·추론 클러스터의 랙당 소비전력이 수십~수백 kW 수준으로 급증하면서, 중앙 집중식 전원 백업 구조의 한계를 보완하는 핵심 랙 하드웨어로 자리 잡고 있습니다.</p>
</div>

<h2 style='border-left: 5px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 28px; margin-bottom: 14px;'>⚙️ 2. 작동 원리 &amp; 메커니즘</h2>
<p style='margin: 0 0 12px 0;'>기존 데이터센터는 외부 교류(AC) 전력을 대형 UPS(무정전 전원장치)에서 직류(DC)로 변환해 배터리에 저장한 뒤, 다시 교류(AC)로 바꾸어 서버 랙의 PSU(전원공급장치)로 보냅니다. 서버 내부에서는 이를 또다시 직류(DC)로 변환합니다. 이처럼 여러 번의 AC-DC 변환을 거치면 전력 손실과 발열이 커집니다.</p>
<p style='margin: 0 0 12px 0;'>반면 <strong>BBU</strong>는 오픈 컴퓨트 프로젝트(OCP)의 Open Rack v3(ORv3) 등 최신 랙 표준 아키텍처에 맞춰 설계됩니다. 서버 랙의 전원 선반(Power Shelf) 바로 위나 아래 슬롯에 1U~2U 규격의 핫스왑(Hot-swap) 모듈 형태로 탑재되며, <strong>48V 또는 54V 직류(DC) 버스바(Busbar)</strong>에 직접 연결됩니다.</p>
<ul style='margin: 0 0 16px 0; padding-left: 20px;'>
<li style='margin-bottom: 6px;'><strong>평상시 대기 및 피크 셰이빙(Peak Shaving):</strong> 상용 전원이 정상 공급될 때는 DC 버스바를 통해 충전 상태를 유지하며, AI GPU 클러스터가 연산을 시작할 때 발생하는 밀리초 단위의 급격한 피크 전력 요구(Transient Spike)를 즉각 보조해 전압 강하를 막습니다.</li>
<li style='margin-bottom: 6px;'><strong>비상시 즉각 절체(Switchover):</strong> 외부 전원이 끊기면 별도의 인버터 변환 과정 없이 DC 버스바로 직접 방전하여, 백업 디젤 발전기가 기동해 안정화되는 약 1~5분 동안 서버의 중단 없는 가동과 메모리 데이터의 안전한 저장(Graceful Shutdown)을 보장합니다.</li>
</ul>

<table style='width: 100%; border-collapse: collapse; margin: 18px 0; font-size: 14px; border: 1px solid #CBD5E1;'>
<thead>
<tr style='background-color: #1E293B; color: #FFFFFF;'>
<th style='padding: 10px 12px; text-align: left; border: 1px solid #334155;'>구분</th>
<th style='padding: 10px 12px; text-align: left; border: 1px solid #334155;'>BBU (배터리 백업 유닛)</th>
<th style='padding: 10px 12px; text-align: left; border: 1px solid #334155;'>중앙 집중식 UPS</th>
<th style='padding: 10px 12px; text-align: left; border: 1px solid #334155;'>ESS (에너지 저장 장치)</th>
</tr>
</thead>
<tbody>
<tr style='background-color: #FFFFFF;'>
<td style='padding: 10px 12px; font-weight: 600; border: 1px solid #CBD5E1;'>설치 위치</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>IT 서버 랙 내부 (1U~2U 셰프)</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>데이터센터 전용 전기실</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>데이터센터 외부 부지 또는 별동</td>
</tr>
<tr style='background-color: #F8FAFC;'>
<td style='padding: 10px 12px; font-weight: 600; border: 1px solid #CBD5E1;'>출력 전력 형태</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>직류 (48V / 54V DC 직접 연결)</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>교류 (AC 이중 변환)</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>고압 교류/직류 (계통 연계)</td>
</tr>
<tr style='background-color: #FFFFFF;'>
<td style='padding: 10px 12px; font-weight: 600; border: 1px solid #CBD5E1;'>백업 지속 시간</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>약 1~5분 (초단기 브리지)</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>약 5~15분 (발전기 기동 대기)</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>수 시간 (전력 부하 관리 및 백업)</td>
</tr>
<tr style='background-color: #F8FAFC;'>
<td style='padding: 10px 12px; font-weight: 600; border: 1px solid #CBD5E1;'>주요 장점</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>변환 손실 최소화, 모듈형 확장, 공간 절약</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>통합 관리 용이, 고전압 계통 보호</td>
<td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>대용량 전력 평준화 및 요금 절감</td>
</tr>
</tbody>
</table>

<h2 style='border-left: 5px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 28px; margin-bottom: 14px;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
<p style='margin: 0 0 12px 0;'>오늘 공개된 국내외 인프라 동향에서도 AI 데이터센터의 고집적화와 이에 따른 랙 단위 비상 전원 하드웨어의 중요성이 뚜렷하게 나타났습니다. 삼성SDI는 북미 최대 에너지 전시회인 ‘RE+ 2026’에서 부지 단위 일체형 ESS(삼성배터리박스)와 전기실용 UPS에 더해 <strong>서버 비상전원용 BBU까지 포함한 ‘AI 데이터센터 배터리 3각 라인업’</strong>을 전면 배치했습니다. 이는 엔비디아의 차세대 베라 루빈(Vera Rubin) 아키텍처 양산 램프업 등 AI 가속기 클러스터 확산으로 데이터센터 분기 매출이 1,076억 달러까지 치솟은 시장 환경과 직결됩니다.</p>
<p style='margin: 0 0 12px 0;'>고밀도 GPU 서버 랙이 늘어나면서 기존 전기실의 대형 UPS만으로는 랙 내부의 순간 부하 변동을 감당하거나 공간 효율을 확보하기 어려워졌습니다. 이에 따라 글로벌 빅테크와 클라우드 사업자들은 서버 랙 내부에 직접 장착해 즉각적인 고출력 방전이 가능한 원통형·각형 기반 BBU 도입을 표준화하고 있습니다. 동시에 오늘 열린 ‘글로벌 AIDC 포럼 2026’에서 삼성화재가 논의한 바와 같이, AI 데이터센터는 설계 단계부터 배터리 열폭주와 전원 사고를 예방하는 안전 기준 확보가 필수 과제로 부상하고 있습니다.</p>

<h2 style='border-left: 5px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 28px; margin-bottom: 14px;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
<blockquote style='border-left: 4px solid #64748B; background-color: #F1F5F9; padding: 12px 16px; margin: 0 0 14px 0; color: #334155;'><strong>엔지니어링 트레이드오프:</strong> 중앙 UPS를 제거하거나 축소해 건물의 물리적 상면 공간과 전력 변환 효율(TCO)을 크게 개선할 수 있지만, 반대로 서버 랙 내부의 가용 공간(U)과 발열·화재 관리 부담이 증가합니다.</blockquote>
<ul style='margin: 0 0 16px 0; padding-left: 20px;'>
<li style='margin-bottom: 6px;'><strong>장점 (전력 효율 및 모듈성):</strong> DC 직접 연결 방식으로 이중 변환 손실을 줄여 전체 전력 효율을 높이며, 서버 랙 증설 시 BBU 모듈만 함께 추가하면 되어 초기 설비투자(CapEx)를 분산할 수 있습니다.</li>
<li style='margin-bottom: 6px;'><strong>고려사항 (열관리 및 화재 안전):</strong> 리튬이온 배터리가 고발열 GPU 바로 근처의 랙 내부에 위치하므로, 고온 환경에서의 셀 수명 저하(Degradation)와 열폭주 전이 차단 설계(난연 격벽, BMS 정밀 모니터링)를 반드시 검증해야 합니다.</li>
<li style='margin-bottom: 6px;'><strong>유지보수 및 랙 밀도:</strong> BBU가 랙 높이의 1U~4U를 차지하므로 서버 탑재 밀도와의 균형을 맞추고, 운영 중 장애 모듈을 무중단으로 교체할 수 있는 핫스왑 규격을 준수해야 합니다.</li>
</ul>

<h2 style='border-left: 5px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 28px; margin-bottom: 14px;'>💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
<div style='background-color: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px; color: #1E3A8A; font-weight: 600;'>
AI 데이터센터의 전원 보호 경계는 전기실(UPS)에서 서버 랙 내부(BBU)로 이동하고 있으며, 실무자는 랙 단위 DC 배전 효율과 배터리 열안전성(BMS)을 하나의 아키텍처로 통합 설계해야 합니다.
</div>

<h2 style='border-left: 5px solid #2563EB; padding-left: 12px; color: #0F172A; font-size: 20px; margin-top: 28px; margin-bottom: 14px;'>🔗 6. 오늘자 관련 뉴스 원문 링크</h2>
<ul style='margin: 0; padding-left: 20px; line-height: 1.9;'>
<li><a href='https://www.khan.co.kr/article/202611181421001/?utm_source=khan_rss&utm_medium=rss&utm_campaign=economy_news' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>삼성SDI, 북미 ‘RE+ 2026’서 AI데이터센터용 배터리 ‘3각 라인업’ 공개</a> - 경향신문</li>
<li><a href='https://news.google.com/rss/articles/CBMibEFVX3lxTE9MRUh0UmdNNVc4X3MtLWRaR190eW43Sm5Cc0ZhLTJRMW0xYnBWd1cxVE5WR0UyYmt6U043Q0dpU3dVaVlJMUk0Y0tlcThDV3R5VWhtMHRXYmgyRGNFcDdGbDBWLWh0cUxYUEE4eA?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>삼성SDI, 미국산 ESS에 서버 비상전원 배터리까지···북미 AI 데이터센터 공략</a> - 스마트비즈</li>
<li><a href='https://www.etnews.com/20261118000407' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>삼성화재, AI 데이터센터 위험관리 논의…“설계부터 사고 예방”</a> - 전자신문</li>
<li><a href='https://news.google.com/rss/articles/CBMibEFVX3lxTFB1LXBMalBxUGllUW9BdkV0RDJlb2FkTXViQUZ0R3MwT3JkU2RMSWRwaWpSRGNGQ2tDckRUTDlFWTh2QWJiYV9aWUpEYV9USmdNbWgtRDh4cFJzaEg4bDhySHYyNEVSV1hmanlNcw?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>엔비디아, 분기 매출 첫 1000억달러 돌파… 데이터센터 사업 매출 110% '껑충'</a> - ER 이코노믹리뷰</li>
</ul>


<div class='infraops-series-crosslinks' style='margin-top: 44px; padding: 20px 24px; background-color: #F8FAFC; border: 1px solid #CBD5E1; border-top: 3px solid #0284C7; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;'><div style='font-size: 13.5px; font-weight: 800; color: #0F172A; letter-spacing: 0.2px; margin-bottom: 12px;'>📚 오늘 함께 발행된 InfraOps 인텔리전스 시리즈 (2026.11.19)</div><table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: #FFFFFF; border: 1px solid #E2E8F0; border-collapse: collapse;'><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #EDE9FE; color: #6D28D9; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🎧 PODCAST</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-19-10min-tech-podcast' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>Nvidia&#x27;s $118B Conditional Guarantees, Loudoun&#x27;s Freeze, and RE+ Power Breakthroughs <span style='color: #6D28D9; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #E0F2FE; color: #0369A1; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📰 BRIEFING</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-19-daily-infraops-briefing' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>글로벌 인프라 브리핑: 엔비디아 1,180억 달러 조건부 보증과 북미 전력 입지 규제 분화 <span style='color: #0369A1; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #CCFBF1; color: #0F766E; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🔬 DEEP DIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-19-deepdive-nvidia-118b-completion-guaranteed-ai-cluster' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>엔비디아 1,180억 달러 완공 조건부 지급보증과 AI 클러스터 커미셔닝·벤더 파이낸싱 아키텍처 분석 <span style='color: #0F766E; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px;  white-space: nowrap;'><span style='background-color: #F1F5F9; color: #334155; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📧 FULL ARCHIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px;  font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-19-dc-infraops-trends-report' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>DC InfraOps Trends (2026년 11월 19일) — 국내외 전체 기사 아카이브 <span style='color: #334155; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr></table></div>
</div>