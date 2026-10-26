---
id: 2026-10-27-glossary-cloud-capacity-reservation
title: "[인프라 용어사전] 클라우드 용량 예약 (Capacity Reservation) - AI 인프라 품귀 속 '확정 컴퓨팅'을 확보하는 아키텍처"
date: 2026-10-27
time: "05:48"
category: Terminology
status: published
summary: "Tech Glossary • Cloud Infrastructure 클라우드 용량 예약 (Capacity Reservation) 가상화 인스턴스의 실행 여부와 관계없이 특정 가용 영역(AZ) 내 물리 서버 슬롯과 패브릭 대역폭을 전용으로 선점하여 '용량 부족(ICE)' 오류를 원천 차단하는 클라우드 자원 확보 메커니즘 호텔 객실을 투숙객 이름이 확정되지 않았"
labels:
  - 인프라용어사전
  - IT백과사전
  - 클라우드용량예약
  - AWS
  - 데이터센터
---

<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; line-height: 1.8; color: #1E293B;'>

  <div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px 20px; margin-bottom: 28px;'>
    <div style='font-size: 13px; font-weight: 700; color: #2563EB; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;'>Tech Glossary • Cloud Infrastructure</div>
    <div style='font-size: 22px; font-weight: 700; color: #0F172A; margin-bottom: 8px;'>클라우드 용량 예약 (Capacity Reservation)</div>
    <p style='margin: 0; font-size: 14px; color: #64748B;'>가상화 인스턴스의 실행 여부와 관계없이 특정 가용 영역(AZ) 내 물리 서버 슬롯과 패브릭 대역폭을 전용으로 선점하여 '용량 부족(ICE)' 오류를 원천 차단하는 클라우드 자원 확보 메커니즘</p>
  </div>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>📌 1. 30초 핵심 요약 & 개념 정의</h2>
  <p>호텔 객실을 투숙객 이름이 확정되지 않았더라도 VIP 행사를 위해 객실 번호와 층수를 지정해 사전에 선결제해 두는 것처럼, <strong>가상머신(인스턴스)을 즉시 켜지 않더라도 특정 가용 영역(Availability Zone, AZ) 내 물리적 서버의 CPU, 메모리, GPU 자원을 사전에 전용(Dedicated) 슬롯으로 100% 점유·격리해 두는 클라우본 자원 제어 기술</strong>입니다.</p>
  <p>공식적으로 클라우드 용량 예약(Capacity Reservation, AWS의 On-Demand Capacity Reservation 및 Capacity Blocks for ML 등)은 인스턴스 패밀리, 인스턴스 크기, 플랫폼, 가용 영역을 지정하여 물리적 컴퓨팅 슬롯을 확정적으로 할당받는 아키텍처입니다. 하이퍼스케일러의 멀티테넌트 환경은 통상적으로 통계적 다중화(Oversubscription)를 기반으로 운영되므로, 대규모 트래픽 급증이나 클러스터 스케일아웃 시 <code>InsufficientInstanceCapacity(용량 부족)</code> 에러를 반환할 위험이 상존합니다. 용량 예약은 인스턴스 인스턴스화 여부와 무관하게 물리 자원을 핀(Pin) 고정하므로 실패 확률 0%의 즉각적인 기동을 보장합니다.</p>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>⚙️ 2. 작동 원리 & 메커니즘</h2>
  
  <h3 style='font-size: 16px; font-weight: 600; color: #1E293B; margin-top: 20px; margin-bottom: 10px;'>물리 계층 할당과 제어 평면 스케줄링</h3>
  <p>일반 온디맨드 인스턴스는 사용자가 <code>RunInstances</code> API를 호출하는 순간 제어 평면(Control Plane)의 스케줄러가 해당 AZ 내 가용 랙(Rack) 풀을 실시간으로 스캔하여 빈 슬롯을 찾아 배치합니다. 반면 용량 예약을 생성하면 제어 평면은 즉시 물리 블레이드 서버의 가상화 하이퍼바이저(AWS Nitro 시스템 등) 계층에서 지정된 vCPU, RAM, 로컬 NVMe 스토리지 및 네트워크 대역폭을 전용 슬롯으로 분할(Slicing)하여 예약 풀(Reserved Pool)로 고정합니다.</p>

  <h3 style='font-size: 16px; font-weight: 600; color: #1E293B; margin-top: 20px; margin-bottom: 10px;'>AI 워크로드를 위한 머신러닝용 용량 블록(Capacity Blocks)</h3>
  <p>엔비디아 H100, H200 등 초고성능 AI 가속기를 사용하는 분산 학습 환경에서는 단순 슬롯 확보를 넘어 <strong>물리적 토폴로지 인접성</strong>이 필수적입니다. 물리적 랙이 지리적으로 분산 배치되면 노드 간 All-Reduce 통신 지연이 급증하기 때문입니다. 이에 따라 최신 클라우드 인프라는 수백~수천 개의 GPU 인스턴스를 초저지연 논블로킹(Non-blocking) 네트워크 패브릭(AWS EFA v2, RoCE)으로 연결된 연속적인 물리적 랙(UltraCluster) 단위로 묶어 특정 기간 동안 확정 대여하는 '용량 블록' 형태로 진화했습니다.</p>

  <h3 style='font-size: 16px; font-weight: 600; color: #1E293B; margin-top: 20px; margin-bottom: 10px;'>클라우드 컴퓨팅 프로비저닝 모델 비교</h3>
  <div style='overflow-x: auto;'>
    <table style='width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13.5px; border: 1px solid #CBD5E1;'>
      <thead>
        <tr style='background-color: #F1F5F9;'>
          <th style='padding: 12px 14px; border: 1px solid #CBD5E1; color: #334155; font-weight: 600;'>비교 항목</th>
          <th style='padding: 12px 14px; border: 1px solid #CBD5E1; color: #334155; font-weight: 600;'>일반 온디맨드</th>
          <th style='padding: 12px 14px; border: 1px solid #CBD5E1; color: #334155; font-weight: 600;'>스팟 인스턴스</th>
          <th style='padding: 12px 14px; border: 1px solid #CBD5E1; color: #334155; font-weight: 600;'>표준 예약 인스턴스 (RI)</th>
          <th style='padding: 12px 14px; border: 1px solid #CBD5E1; color: #2563EB; font-weight: 700;'>용량 예약 (Capacity Reservation)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 600; background-color: #F8FAFC;'>용량 가용성 보장</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>보장 안 됨 (ICE 발생 가능)</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>미보장 (중단 알림 후 회수)</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>순수 재무적 할인 (용량 미보장)</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 600; color: #2563EB;'>100% 물리 슬롯 할당 보장</td>
        </tr>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 600; background-color: #F8FAFC;'>물리적 AZ 종속성</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>리전 또는 AZ 선택</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>유휴 자원 보유 AZ 한정</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>리전 범위 적용 가능</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 600;'>특정 단일 AZ에 물리적 귀속</td>
        </tr>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 600; background-color: #F8FAFC;'>유휴 시 과금 여부</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>과금 없음 (0원)</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>과금 없음 (0원)</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>약정 기간 전체 고정 과금</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0; color: #DC2626;'>인스턴스 미가동 중에도 과금</td>
        </tr>
        <tr>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 600; background-color: #F8FAFC;'>주요 사용 목적</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>일반 서비스 운영</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>배치 작업, 내결함 워크로드</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0;'>1~3년 장기 비용 절감</td>
          <td style='padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 600;'>대규모 AI 분산학습, DR 페일오버</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  <p>오늘자 주요 외신과 국내 언론에 따르면 아마존 앤디 재시(Andy Jassy) 최고경영자(CEO)는 팟캐스트 인터뷰를 통해 <strong>"2027년까지 공급될 대규모 AI 클라우드 용량의 대부분이 이미 사전 계약되었으며, 2028년 물량도 상당 부분 고객을 확보했다"</strong>고 공식 확인했습니다. AWS가 연간 수천억 달러에 달하는 기록적인 자본적 지출(CapEx)을 집행하며 데이터센터를 증설하고 있음에도, 글로벌 AI 수요가 인프라 공급 속도를 완전히 압도하고 있는 형국입니다.</p>
  <p>이와 같은 공급 부족 국면에서 엔터프라이즈와 AI 선도 기업들이 필수적으로 채택하는 아키텍처가 바로 <strong>클라우드 용량 예약</strong>입니다. 예컨대 오늘 20억 달러(약 2조 7천억 원) 규모의 대형 AI 인프라 확장을 체결한 미국 최대 통신사 버라이즌(Verizon)의 사례처럼, 기간계 서비스 및 대규모 파운데이션 모델을 서빙하는 빅테크는 단순 온디맨드 호출 방식에 의존할 수 없습니다. 수년치 선도 계약(Pre-sold)을 통해 특정 데이터센터 클러스터의 전력, 랙, 가속기 노드를 용량 예약 형태로 사전에 묶어두어야만 안정적인 서비스 배포가 가능합니다.</p>
  <p>반면 자체적인 대규모 현금 흐름이나 구속력 있는 장기 용량 예약 계약을 확보하지 못한 채 부채로만 고가의 GPU를 매입한 일부 네오클라우드들은 전력망 미연계와 고객 이탈로 인해 막대한 '유휴 컴퓨팅(Stranded Compute)' 자산을 떠안고 도산 위험에 직면하고 있어, 양측의 인프라 거버넌스 격차가 극명하게 드러나고 있습니다.</p>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
  
  <div style='background-color: #EFF6FF; border-left: 4px solid #3B82F6; padding: 14px 18px; border-radius: 4px; margin: 16px 0;'>
    <div style='font-weight: 700; color: #1D4ED8; margin-bottom: 6px;'>핵심 엔지니어링 장점</div>
    <ul style='margin: 0; padding-left: 18px; color: #1E40AF; font-size: 14px;'>
      <li><strong>SLA 100% 보장:</strong> 스케일아웃 이벤트 발생 시 하이퍼스케일러의 재고 고갈로 인한 <code>InsufficientInstanceCapacity</code> 에러를 완전히 배제합니다.</li>
      <li><strong>재해 복구(DR)의 즉각성:</strong> 보조 리전의 특정 AZ에 최소 필요 용량을 예약해 둘 경우, 메인 리전 단절 시 수천 대의 인스턴스를 지연 없이 즉시 프로비저닝할 수 있습니다.</li>
      <li><strong>초고속 인터커넥트 유지:</strong> 머신러닝용 용량 블록을 사용할 경우 3.2Tbps 수준의 EFA 네트워크가 구성된 물리적 근접 랙(Cluster Placement Group)이 보장됩니다.</li>
    </ul>
  </div>

  <div style='background-color: #FEF2F2; border-left: 4px solid #EF4444; padding: 14px 18px; border-radius: 4px; margin: 16px 0;'>
    <div style='font-weight: 700; color: #B91C1C; margin-bottom: 6px;'>기술적 제약 및 트레이드오프</div>
    <ul style='margin: 0; padding-left: 18px; color: #991B1B; font-size: 14px;'>
      <li><strong>유휴 비용(Idle Cost) 발생:</strong> 예약된 슬롯에 가상머신을 단 1대도 실행하지 않더라도 예약 생성 시점부터 정규 온디맨드 요금이 100% 청구됩니다.</li>
      <li><strong>AZ 고착(Lock-in) 현상:</strong> 용량 예약은 단일 가용 영역의 물리 자원과 매핑되므로, 멀티 AZ 분산 오토스케일링 그룹(ASG) 구성 시 AZ별 트래픽 가중치 설계를 별도로 최적화해야 합니다.</li>
      <li><strong>사양 유연성 부재:</strong> 생성된 예약의 인스턴스 패밀리나 크기를 동적으로 변경할 수 없으며, 설계를 변경하려면 기존 예약을 취소하고 재예약해야 하므로 재고 선점 실패 위험이 존재합니다.</li>
    </ul>
  </div>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  <p style='background-color: #F8FAFC; border: 1px solid #E2E8F0; padding: 14px 18px; border-radius: 6px; font-weight: 600; color: #0F172A;'>
    "AI 클러스터와 미션 크리티컬 인프라에서 가장 치명적인 다운타임은 소프트웨어 버그가 아닌 물리 자원 고갈(ICE)에서 발생한다. 핵심 워크로드는 스케일아웃 오토스케일러보다 '물리 슬롯을 핀(Pin) 고정하는 용량 예약 아키텍처'를 선제적으로 설계해야 한다."
  </p>

  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-top: 32px; margin-bottom: 16px;'>🔗 6. 오늘자 관련 뉴스 원문 링크</h2>
  <ul style='list-style-type: disc; padding-left: 20px; margin-top: 12px;'>
    <li style='margin-bottom: 8px;'>
      <a href='https://www.datacenterdynamics.com/en/news/aws-capacity-largely-sold-out-in-2027-amazon-ceo-claims/' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>AWS capacity 'largely' sold out in 2027, Amazon CEO claims</a> - DCD
    </li>
    <li style='margin-bottom: 8px;'>
      <a href='https://www.chosun.com/economy/tech_it/2026/10/26/MIZTGNBXHFSWGY3GHA3TAMDCHA/' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>아마존, AI 인프라 투자 확대 시사… “2027년 물량 대부분 계약”</a> - 조선일보
    </li>
    <li style='margin-bottom: 8px;'>
      <a href='https://www.datacenterdynamics.com/en/news/verizon-signs-2bn-aws-ai-infrastructure-deal/' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Verizon signs $2bn AWS AI infrastructure deal</a> - DCD
    </li>
    <li style='margin-bottom: 8px;'>
      <a href='https://news.google.com/rss/articles/CBMiaEFVX3lxTE9XYzB4STJjdEUzUVpPNWlwUVdYYU1CM1dkeHZsX2RONkxxTXp1R1JVR0NMa1BSc1lSdW1WeEgtMy0yWmdLOVFHVXgtbFl4VVM1dXJ1YjlBbnJPZmM2Q2VncXRSbm95TENT?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Musk Predicts Shakeout Among 200+ Neoclouds as SpaceX Claims $40B GPU Financing</a> - XenoSpectrum
    </li>
  </ul>


<div class='infraops-series-crosslinks' style='margin-top: 44px; padding: 20px 24px; background-color: #F8FAFC; border: 1px solid #CBD5E1; border-top: 3px solid #0284C7; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;'><div style='font-size: 13.5px; font-weight: 800; color: #0F172A; letter-spacing: 0.2px; margin-bottom: 12px;'>📚 오늘 함께 발행된 InfraOps 인텔리전스 시리즈 (2026.10.27)</div><table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: #FFFFFF; border: 1px solid #E2E8F0; border-collapse: collapse;'><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #EDE9FE; color: #6D28D9; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🎧 PODCAST</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-10-27-10min-tech-podcast' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>The Capital Bifurcation and the Sovereign Power Shift: GPU Debt Shakeout, Sold-Out Hyperscale Backlogs, and 800V Direct-Current Standardization <span style='color: #6D28D9; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #E0F2FE; color: #0369A1; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📰 BRIEFING</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-10-27-daily-infraops-briefing' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>글로벌 인프라 브리핑: 53조 원 GPU 차입과 네오클라우드 구조조정 &amp; AWS 2027년 공급 용량 조기 매진 <span style='color: #0369A1; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #CCFBF1; color: #0F766E; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🔬 DEEP DIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-10-27-deepdive-aws-verizon-dark-fiber-metro-dci-fabric' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>하이퍼스케일러의 다크 파이버 사재기와 메트로 DCI 패브릭: AWS-버라이즌 20억 달러 계약이 드러낸 분산 AI 인프라의 물리적 조건 <span style='color: #0F766E; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px;  white-space: nowrap;'><span style='background-color: #F1F5F9; color: #334155; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📧 FULL ARCHIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px;  font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-10-27-dc-infraops-trends-report' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>DC InfraOps Trends (2026년 10월 27일) — 국내외 전체 기사 아카이브 <span style='color: #334155; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr></table></div>
</div>